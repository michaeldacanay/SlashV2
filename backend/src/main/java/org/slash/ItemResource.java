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
    public List<Item> getByItem(@PathParam("itemtype") String itemType ) {
        return itemRepository.list("itemType",itemType);
    }
    @GET
    @Path("/{store}")
    public List<Item> getByStore(@PathParam("store") String store) {
        return itemRepository.list("store",store);
    }
    @GET
    @Path("/{itemtype}/{store}")
    public List<Item> getByItemAndStore(@PathParam("itemtype") String itemType, @PathParam("store") String store) {
        return itemRepository.list("itemType = ?1 and store = ?2",itemType,store);

    }
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/hello")
    public String hello() {
        return "Hello from RESTEasy Reactive";
    }
}
