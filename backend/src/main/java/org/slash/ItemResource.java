package org.slash;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.slash.models.Item;
import org.slash.repositories.ItemRepository;

import java.util.List;

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ItemResource {

    @Inject
    ItemRepository itemRepository;
    @GET
    @Path("/all")
    public List<Item> getAllItems() {
        return itemRepository.listAll();
    }
    @GET
    @Path("/{itemtype}")
    public List<Item> getByItem(@PathParam("itemtype") String itemType) {
        return itemRepository.list("itemType",itemType);
    }
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from RESTEasy Reactive";
    }
}
