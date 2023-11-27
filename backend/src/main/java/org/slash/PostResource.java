package org.slash;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.slash.models.User;
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

    @Transactional
    @POST
    @Path("/feed")
    public List<Post> feed() {
        return postRepository.listAll();
    }
}