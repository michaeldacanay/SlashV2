package org.slash;

import io.quarkus.arc.profile.UnlessBuildProfile;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.jboss.logging.Logger;
import org.slash.client.PythonScraperClient;
import org.slash.repositories.ItemRepository;
import org.slash.repositories.UserRepository;
import org.slash.repositories.PostRepository;
import org.slash.repositories.CommentRepository;

@UnlessBuildProfile("test")
public class StartupBean {
    /**
     *
     * Runs on application startup and calls Scraper API to seed data
     * This requires both the Python Scraper and Database to be already set up
     */
    private static final Logger LOG = Logger.getLogger(CronJob.class);
    @Inject
    ItemRepository itemRepository;
    @Inject
    UserRepository userRepository;
    @Inject
    PostRepository postRepository;
    @Inject
    CommentRepository commentRepository;
    @RestClient
    PythonScraperClient pythonScraperClient;
    @UnlessBuildProfile("test")
    void onStart(@Observes StartupEvent ev) {
        LOG.info("The application is and calling the Python API to seed data...");
        if (pythonScraperClient.triggerScraper("all", "startup").getStatus() == 500) {
            Log.info("The scraper is failing");
        }
        LOG.info("Seeding is happening...");
    }
}
