package org.slash;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.slash.models.User;
import org.slash.repositories.UserRepository;
import org.slash.models.Item;
import org.slash.repositories.ItemRepository;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.transaction.Transactional;

import java.util.List;

@Path("/user")
public class UserResource {

    @Inject
    UserRepository userRepository;

    @Inject
    ItemRepository itemRepository;

    @POST
    @Path("/addUser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public void addUser(String email) {
        User currentUser = userRepository.find("email", email).firstResult();
        if (currentUser == null) {
            User newUser = new User();
            newUser.setEmail(email);

            userRepository.persist(newUser);
        }
    }

    @POST
    @Path("/profile")
    @Produces(MediaType.TEXT_PLAIN)
    public String profile(String email) {
        System.out.println(email + "profile");
        User currentUser = userRepository.find("email", email).firstResult();
        System.out.println(currentUser.getEmail());
        if (currentUser != null) {
            return currentUser.getEmail() + ", hello from the backend!";
        } else {
            return "User not found";
        }
    }

    @POST
    @Path("/wishlist")
    public List<Item> getWishlist(String email) {
        User currentUser = userRepository.find("email", email).firstResult();
        return currentUser.getWishlist();
    }

    @Transactional
    @POST
    @Path("/addItem")
    public String addItem(ItemRequest itemRequest) {
        System.out.println(itemRequest.getEmail());
        String email = itemRequest.getEmail();
        System.out.println(email);
        String itemURl = itemRequest.getItemUrl();

        User currentUser = userRepository.find("email", email).firstResult();
        System.out.println(currentUser);
        List<Item> wishlist = currentUser.getWishlist();
        Item item = itemRepository.find("itemURl", itemURl).firstResult();

        wishlist.add(item);
        userRepository.persist(currentUser);
        System.out.println(currentUser.getWishlist());
        return "Success";
    }

    public static class ItemRequest {
        private String email;
        private String itemUrl;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getItemUrl() {
            return itemUrl;
        }

        public void setItemUrl(String itemUrl) {
            this.itemUrl = itemUrl;
        }
    }

//    public static class UserEmail {
//        private String email;
//
//        public String getEmail() { return email; }
//
//        public void setEmail(String email) { this.email = email; }
//    }

}