package org.slash;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;
import org.slash.models.Item;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.assertj.core.api.Assertions.assertThat;
@QuarkusTest
public class ItemResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/api/hello")
          .then()
             .statusCode(200)
             .body(is("Hello from RESTEasy Reactive"));
    }

    @Test
    public void testGetAllItems(){
        given()
                .when().get("/api/all")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON);

    }

    @Test
    public void testGetByItem(){
        given()
                .when().get("/api/item/laptops")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON);

    }

    @Test
    public void testGetByStore(){
        given()
                .when().get("/api/amazon")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON);

    }

    @Test
    public void testGetByItemAndStore(){
        given()
                .when().get("/api/laptop/amazon")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON);

    }
}