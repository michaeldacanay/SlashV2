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
import org.slash.models.User;
import jakarta.transaction.Transactional;

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
    @RestClient
    PythonScraperClient pythonScraperClient;
    @UnlessBuildProfile("test")
    void onStart(@Observes StartupEvent ev) {
        LOG.info("The application is and calling the Python API to seed data...");
        if (pythonScraperClient.triggerScraper().getStatus() == 500) {
            Log.info("The scraper is failing");
        }
        LOG.info("Seeding is happening...");
    }
    @Transactional
    public void loadUsers(@Observes StartupEvent evt) {
        // reset and load all test users
        User.deleteAll();
        User.add("user", "user", "user");
    }
}
