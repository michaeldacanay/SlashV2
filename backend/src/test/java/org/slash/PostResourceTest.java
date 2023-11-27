package org.slash;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slash.UserResource;
import org.slash.models.User;
import org.slash.models.Post;
import org.slash.models.Comment;
import org.slash.repositories.UserRepository;
import org.slash.repositories.PostRepository;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;


@QuarkusTest
public class PostResourceTest {


    @Inject
    PostRepository postRepository;

    @Inject
    PostResource postResource;

    @BeforeEach
    @Transactional
    public void setup() {
        postRepository.deleteAll();
        User testUser = new User();
        Post testPost = new Post();

        testPost.setUser(testUser);
        testPost.setTitle("test title");
        testPost.setDescription("test description");

        String testImagePath = getClass().getClassLoader().getResource("test-image.jpg").getPath();

        List<String> images = List.of(testImagePath);


        testPost.setImageFiles(images);

        Comment testComment = new Comment();
        testComment.setUser(testUser);
        testComment.setPost(testPost);
        testComment.setContent("test comment");

        testPost.getComments().add(testComment);

        double price = 19.99;

        testPost.setPrice(price);

        postRepository.persist(testPost);
    }

    @Test
    public void testFeed() {
        List<Post> feed = postResource.feed();


        // Assert that the feed is not null and contains at least one post
        assertThat(feed).isNotNull().isNotEmpty();

        // Get the first post from the feed (assuming there is at least one post)
        Post firstPost = feed.get(0);

        // Assert that the properties of the first post match the expected values
        assertThat(firstPost.getTitle()).isEqualTo("test title");
        assertThat(firstPost.getDescription()).isEqualTo("test description");
        assertThat(firstPost.getImageFiles()).containsExactly(getClass().getClassLoader().getResource("test-image.jpg").getPath());
        assertThat(firstPost.getComments()).hasSize(1);

        Comment firstComment = firstPost.getComments().get(0);
        assertThat(firstComment.getContent()).isEqualTo("test comment");
        // You might want to check other properties of the comment or user associated with the comment

        assertThat(firstPost.getPrice()).isEqualTo(19.99);
        // You might want to check other properties of the post or user associated with the post
    }
}