package org.slash;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.slash.models.User;
import org.slash.repositories.UserRepository;
import org.slash.models.Item;
import org.slash.repositories.ItemRepository;
import org.slash.models.Post;
import org.slash.repositories.PostRepository;
import org.slash.models.Comment;
import org.slash.repositories.CommentRepository;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

@Path("/api")
public class UserResource {

    @Inject
    UserRepository userRepository;

    @Inject
    ItemRepository itemRepository;

    @Inject
    PostRepository postRepository;

    @Inject
    CommentRepository commentRepository;

    @POST
    @Path("/user/addUser")
    @Consumes(MediaType.TEXT_PLAIN)
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
    @Path("/user/profile")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public String profile(String email) {
        User currentUser = userRepository.find("email", email).firstResult();
        if (currentUser != null) {
            return currentUser.getEmail() + ", hello from the backend!\nCustom profile options under construction.";
        } else {
            return "User not found";
        }
    }

    @POST
    @Path("/user/wishlist")
    @Consumes(MediaType.TEXT_PLAIN)
    public List<Item> getWishlist(String email) {
        User currentUser = userRepository.find("email", email).firstResult();
        return currentUser.getWishlist();
    }

    @Transactional
    @POST
    @Path("/user/addItem")
    public String addItem(ItemRequest itemRequest) {
        String email = itemRequest.getEmail();
        String itemURl = itemRequest.getItemUrl();

        User currentUser = userRepository.find("email", email).firstResult();
        List<Item> wishlist = currentUser.getWishlist();
        Item item = itemRepository.find("itemURl", itemURl).firstResult();

        wishlist.add(item);
        userRepository.persist(currentUser);
        return "Add Success";
    }

    @Transactional
    @POST
    @Path("/user/deleteItem")
    public String deleteItem(ItemRequest itemRequest) {
        String email = itemRequest.getEmail();
        String itemURl = itemRequest.getItemUrl();
        User currentUser = userRepository.find("email", email).firstResult();

        List<Item> wishlist = currentUser.getWishlist();
        Iterator<Item> iterator = wishlist.iterator();
        while (iterator.hasNext()) {
            Item item = iterator.next();
            String url = item.getItemURl();
            if (url.equals(itemURl)) {
                iterator.remove();
            }
        }

        userRepository.persist(currentUser);
        return "Delete Success";
    }


    @POST
    @Consumes(MediaType.TEXT_PLAIN)
    @Path("/user/searchHistory")
    public List<String> getSearchHistory(String email) {
        User currentUser = userRepository.find("email", email).firstResult();
        System.out.println(currentUser);
        System.out.println(currentUser.getSearchHistory());
        return currentUser.getSearchHistory();
    }

    @Transactional
    @POST
    @Path("/user/addSearch")
    public String addSearch(SearchRequest searchRequest) {
        String email = searchRequest.getEmail();
        String search = searchRequest.getSearch();

        User currentUser = userRepository.find("email", email).firstResult();
        List<String> searchHistory = currentUser.getSearchHistory();

        searchHistory.add(search);
        userRepository.persist(currentUser);
        return "Add Success";
    }

    @Transactional
    @POST
    @Path("/user/deleteSearch")
    public String deleteSearch(SearchRequest searchRequest) {
        String email = searchRequest.getEmail();
        String searchIndexString = searchRequest.getSearch();
        int searchIndex = Integer.parseInt(searchIndexString);
        User currentUser = userRepository.find("email", email).firstResult();

        List<String> searchHistory = currentUser.getSearchHistory();
        searchHistory.remove(searchIndex);

        userRepository.persist(currentUser);
        return "Delete Success";
    }

    @Transactional
    @POST
    @Path("/user/makePost")
    public String makePost(PostDTO postDTO) {
        String userEmail = postDTO.getUserEmail();
        User currentUser = userRepository.find("email", userEmail).firstResult();

        Post newPost = new Post();
        System.out.println(newPost);
        newPost.setUser(currentUser);
        newPost.setTitle(postDTO.getTitle());
        newPost.setDescription(postDTO.getDescription());
        newPost.setPrice(postDTO.getPrice());
        newPost.setImageFile(postDTO.getImageFile());

        System.out.println(newPost);

        postRepository.persist(newPost);
        userRepository.persist(currentUser);
        return "Post Success";
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

    public static class SearchRequest {
        private String email;
        private String search;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getSearch() {
            return search;
        }

        public void setSearch(String search) {
            this.search = search;
        }
    }

    public static class PostDTO {
        public String userEmail;

        public String title;

        public String description;

        public String price;

        public String imageFile;


        public String getUserEmail() {
            return userEmail;
        }

        public void setUserEmail(String userEmail) {
            this.userEmail = userEmail;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getPrice() {
            return price;
        }

        public void setPrice(String price) {
            this.price = price;
        }

        public String getImageFile() {
            return imageFile;
        }

        public void setImageFile(String imageFile) {
            this.imageFile = imageFile;
        }

    }

}