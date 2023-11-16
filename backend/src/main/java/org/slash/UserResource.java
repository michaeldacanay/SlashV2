package org.slash;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.slash.models.User;
import org.slash.repositories.UserRepository;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.transaction.Transactional;

import java.util.List;

@Path("/user")
public class UserResource {

    @Inject
    UserRepository userRepository;

    @POST
    @Path("/addUser")
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public void addUser(String email) {
        User userExists = userRepository.find("email", email).firstResult();
        if (userExists == null) {
            User newUser = new User();
            newUser.setEmail(email);

            userRepository.persist(newUser);
        }
    }

    @POST
    @Path("/profile")
    @Produces(MediaType.TEXT_PLAIN)
    public String profile(String email) {
        User currentUser = userRepository.find("email", email).firstResult();
        if (currentUser != null) {
            return currentUser.getEmail() + ", hello from the backend!";
        } else {
            return "User not found";
        }
    }
}