package org.slash;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.slash.models.User;
import org.slash.UserResource.PostDTO;
import org.slash.repositories.UserRepository;
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
public class PostResource {

    @Inject
    PostRepository postRepository;


    @GET
    @Path("/feed")
    public List<PostDTO> feed() {

        List<PostDTO> posts = new ArrayList<>();
        for (Post post : postRepository.listAll()) {
            PostDTO postDTO = new PostDTO();
            postDTO.setUserEmail(post.getUser().getEmail());
            postDTO.setTitle(post.getTitle());
            postDTO.setDescription(post.getDescription());
            postDTO.setPrice(post.getPrice());
            postDTO.setImageFile(post.getImageFile());

            posts.add(postDTO);
        }
        System.out.println();
        return posts;
    }
}