package org.slash;

import jakarta.ws.rs.*;
import org.slash.client.PythonScraperClient;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import jakarta.ws.rs.core.Response;

@Path("/request")
public class RequestResource {

    @RestClient
    PythonScraperClient pythonScraperClient;

    @GET
    @Path("/{store}/{item}")
    public int request(@PathParam("store") String store, @PathParam("item") String item) {

        return pythonScraperClient.triggerScraper(store, item).getStatus();
    }
}