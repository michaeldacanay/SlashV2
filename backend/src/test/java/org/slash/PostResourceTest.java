package org.slash;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.slash.UserResource;
import org.slash.UserResource.PostDTO;
import org.slash.models.User;
import org.slash.models.Post;
import org.slash.models.Comment;
import org.slash.repositories.UserRepository;
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
public class PostResourceTest {


    @Inject
    PostRepository postRepository;

    @Inject
    PostResource postResource;

    @Inject
    UserRepository userRepository;

    @Inject
    CommentRepository commentRepository;

    @BeforeEach
    @Transactional
    public void setup() {
        commentRepository.deleteAll();
        postRepository.deleteAll();
        userRepository.deleteAll();
        User testUser = new User();
        testUser.setEmail("test@test.com");
        userRepository.persist(testUser);
        Post testPost = new Post();

        testPost.setUser(testUser);
        testPost.setTitle("test title");
        testPost.setDescription("test description");

        String testImagePath = getClass().getClassLoader().getResource("test-image.jpg").getPath();




        testPost.setImageFile(testImagePath);

        Comment testComment = new Comment();
        testComment.setUser(testUser);
        testComment.setPost(testPost);
        testComment.setContent("test comment");
        commentRepository.persist(testComment);

        testPost.getComments().add(testComment);



        testPost.setPrice("100");

        postRepository.persist(testPost);
    }

    @Test
    @Transactional
    public void testFeed() {
        List<PostDTO> feed = postResource.feed();


        assertThat(feed).isNotNull().isNotEmpty();

        PostDTO firstPost = feed.get(0);

        assertThat(firstPost.getTitle()).isEqualTo("test title");
        assertThat(firstPost.getDescription()).isEqualTo("test description");
        assertThat(firstPost.getImageFile()).isEqualTo(getClass().getClassLoader().getResource("test-image.jpg").getPath());


        assertThat(firstPost.getPrice()).isEqualTo("100");
    }
}