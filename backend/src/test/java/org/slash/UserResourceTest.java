package org.slash;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slash.UserResource;
import org.slash.models.User;
import org.slash.models.Item;
import org.slash.models.Post;
import org.slash.models.Comment;
import org.slash.UserResource.ItemRequest;
import org.slash.UserResource.SearchRequest;
import org.slash.UserResource.PostDTO;
import org.slash.repositories.UserRepository;
import org.slash.repositories.ItemRepository;
import org.slash.repositories.PostRepository;
import org.slash.repositories.CommentRepository;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;


@QuarkusTest
public class UserResourceTest {

    @Inject
    UserRepository userRepository;

    @Inject
    ItemRepository itemRepository;

    @Inject
    UserResource userResource;

    @Inject
    PostResource postResource;

    @Inject
    PostRepository postRepository;

    @Inject
    CommentRepository commentRepository;

    @BeforeEach
    @Transactional
    public void setup() {
        commentRepository.deleteAll();
        postRepository.deleteAll();
        userRepository.deleteAll();
        itemRepository.deleteAll();

        User testUser = new User();
        testUser.setEmail("test@test.com");
        userRepository.persist(testUser);
    }

    @Test
    public void testAddUser() {

        String newEmail = "new@new.com";

        userResource.addUser(newEmail);

        User addedUser = userRepository.find("email", newEmail).firstResult();
        assertThat(addedUser).isNotNull();
        assertThat(addedUser.getEmail()).isEqualTo(newEmail);
    }

    @Test
    public void testProfile() {
        String existingUserEmail = "test@test.com";

        String profileResponse = userResource.profile(existingUserEmail);

        assertThat(profileResponse).isEqualTo("test@test.com, hello from the backend!");
    }

    @Test
    public void testGetWishlist() {
        String existingUserEmail = "test@test.com";

        User existingUser = userRepository.find("email", existingUserEmail).firstResult();
        List<Item> wishlist = existingUser.getWishlist();
        Item testItem = new Item();
        wishlist.add(testItem);

        List<Item> wishlistResponse = userResource.getWishlist(existingUserEmail);

        assertThat(wishlistResponse).isNotNull();
        assertThat(wishlistResponse.get(0)).isEqualTo(testItem);
    }

//    @Test public void testSendWishlist() {
//        fail("fail");
//    }

    @Test
    @Transactional
    public void testAddItem() {
        String existingUserEmail = "test@test.com";

        User existingUser = userRepository.find("email", existingUserEmail).firstResult();
        Item testItem = new Item();
        String url = "fakeURLS.com";
        testItem.setItemURl(url);
        itemRepository.persist(testItem);

        Item storedTestItem = itemRepository.find("itemURl", url).firstResult();
        assertThat(storedTestItem.getItemURl()).isEqualTo(url);

        ItemRequest request = new ItemRequest();
        request.setEmail(existingUserEmail);
        request.setItemUrl(url);


        String addResponse = userResource.addItem(request);

        assertThat(addResponse).isEqualTo("Add Success");

        List<Item> wishlist = userResource.getWishlist(existingUserEmail);

        assertThat(wishlist).isNotNull();
        assertThat(wishlist.size()).isEqualTo(1);

        Item wishItem = wishlist.get(0);
        assertThat(wishItem.getItemURl()).isEqualTo(url);
    }

    @Test
    @Transactional
    public void testDeleteItem() {
        String existingUserEmail = "test@test.com";

        User existingUser = userRepository.find("email", existingUserEmail).firstResult();
        Item testItem = new Item();
        String url = "fakeURLS.com";
        testItem.setItemURl(url);
        itemRepository.persist(testItem);

        Item storedTestItem = itemRepository.find("itemURl", url).firstResult();
        assertThat(storedTestItem.getItemURl()).isEqualTo(url);

        ItemRequest request = new ItemRequest();
        request.setEmail(existingUserEmail);
        request.setItemUrl(url);


        String addResponse = userResource.addItem(request);

        assertThat(addResponse).isEqualTo("Add Success");

        List<Item> wishlist = userResource.getWishlist(existingUserEmail);

        assertThat(wishlist).isNotNull();
        assertThat(wishlist.size()).isEqualTo(1);

        Item wishItem = wishlist.get(0);
        assertThat(wishItem.getItemURl()).isEqualTo(url);

        String deleteResponse = userResource.deleteItem(request);

        assertThat(deleteResponse).isEqualTo("Delete Success");
        List<Item> updatedWishlist = userResource.getWishlist(existingUserEmail);

        assertThat(updatedWishlist).isNotNull();
        assertThat(updatedWishlist.size()).isEqualTo(0);

    }

    @Test
    @Transactional
    public void testSearchHistory() {
        String existingUserEmail = "test@test.com";

        User existingUser = userRepository.find("email", existingUserEmail).firstResult();
        List<String> searchHistory = existingUser.getSearchHistory();
        String search = "searchTerm";
        searchHistory.add(search);
        System.out.println(searchHistory);

        List<String> searchHistoryResponse = userResource.getSearchHistory(existingUserEmail);


        assertThat(searchHistoryResponse).isNotNull();
        assertThat(searchHistoryResponse.get(0)).isEqualTo(search);

    }

    @Test
    @Transactional
    public void testAddSearch() {
        String existingUserEmail = "test@test.com";

        User existingUser = userRepository.find("email", existingUserEmail).firstResult();
        String search = "laptops";

        SearchRequest request = new SearchRequest();
        request.setEmail(existingUserEmail);
        request.setSearch(search);


        String addResponse = userResource.addSearch(request);

        assertThat(addResponse).isEqualTo("Add Success");

        List<String> searchHistory = userResource.getSearchHistory(existingUserEmail);

        assertThat(searchHistory).isNotNull();
        assertThat(searchHistory.size()).isEqualTo(1);

        String storedSearch = searchHistory.get(0);
        assertThat(storedSearch).isEqualTo(search);
    }

    @Test
    @Transactional
    public void testDeleteSearch() {
        String existingUserEmail = "test@test.com";

        User existingUser = userRepository.find("email", existingUserEmail).firstResult();
        String search = "laptops";

        SearchRequest request = new SearchRequest();
        request.setEmail(existingUserEmail);
        request.setSearch(search);


        String addResponse = userResource.addSearch(request);

        assertThat(addResponse).isEqualTo("Add Success");

        List<String> searchHistory = userResource.getSearchHistory(existingUserEmail);

        assertThat(searchHistory).isNotNull();
        assertThat(searchHistory.size()).isEqualTo(1);

        String storedSearch = searchHistory.get(0);
        assertThat(storedSearch).isEqualTo(search);

        SearchRequest deleteRequest = new SearchRequest();
        request.setEmail(existingUserEmail);
        request.setSearch("0");

        String deleteResponse = userResource.deleteSearch(request);

        assertThat(deleteResponse).isEqualTo("Delete Success");
        List<String> updatedSearchHistory = userResource.getSearchHistory(existingUserEmail);

        assertThat(updatedSearchHistory).isNotNull();
        assertThat(updatedSearchHistory.size()).isEqualTo(0);
    }

    @Test
    @Transactional
    public void testMakePost() {
        String existingUserEmail = "test@test.com";

        User existingUser = userRepository.find("email", existingUserEmail).firstResult();

        PostDTO testPost = new PostDTO();
        testPost.setUserEmail(existingUserEmail);
        testPost.setTitle("test title");
        testPost.setDescription("test description");
        testPost.setPrice("100");

        String testImagePath = getClass().getClassLoader().getResource("test-image.jpg").getPath();

        testPost.setImageFile(testImagePath);

        String postResponse = userResource.makePost(testPost);

        assertThat(postResponse).isEqualTo("Post Success");
        Post createdPost = postRepository.find("title", "test title").firstResult();
        assertThat(createdPost).isNotNull();
        assertThat(existingUser.getEmail()).isEqualTo(createdPost.getUser().getEmail());
        assertThat("test description").isEqualTo(createdPost.getDescription());
        assertThat("100").isEqualTo(createdPost.getPrice());
    }



}