package org.slash;

import jakarta.ws.rs.*;
import org.slash.client.PythonScraperClient;
import org.eclipse.microprofile.rest.client.inject.RestClient;

@Path("/request")
public class RequestResource {

    @RestClient
    PythonScraperClient pythonScraperClient;

    @GET
    @Path("/{item}")
    public void request(@PathParam("item") String item) {
        pythonScraperClient.triggerScraper(item);
    }
}