package org.slash;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;
import org.slash.models.User;
import org.slash.repositories.UserRepository;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;


@QuarkusTest
public class UserResourceTest {

    @Test
    public void testAddUser() {

        fail("fail");
    }

    @Test
    public void testProfile() {
        fail("fail");
    }

    @Test
    public void testGetWishlist() {
        fail("fail");
    }

    @Test public void sendWishlist() {
        fail("fail");
    }

    @Test
    public void testAddItem() {
        fail("fail");
    }

    @Test
    public void testSearchHistory() {
        fail("fail");
    }
}