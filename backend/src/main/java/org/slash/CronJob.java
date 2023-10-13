package org.slash;

import io.quarkus.arc.profile.IfBuildProfile;
import io.quarkus.arc.profile.UnlessBuildProfile;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import io.quarkus.scheduler.Scheduled;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.slash.client.PythonScraperClient;
import org.jboss.logging.Logger;
import org.slash.repositories.ItemRepository;

@ApplicationScoped
public class CronJob {
    private static final Logger LOG = Logger.getLogger(CronJob.class);
    @Inject
    ItemRepository itemRepository;
    @RestClient
    PythonScraperClient pythonScraperClient;

    @Transactional
    public Long delete() {
        return itemRepository.deleteAll();
    }



    /**
     * Quarkus cron job that runs every day at 8am to remove stale data and add new data
     * If you want another cron job, create another scheduled function
     */
    @Scheduled(cron = "0 8 * * * ?")
    void cronJob() {
        LOG.info("executing cronjob");
        LOG.info("Clearing database...");
        Long items = delete();
        LOG.info("Database cleared, seeding it now...");
        if (pythonScraperClient.triggerScraper().getStatus() == 500) {
            LOG.info("The scraper is failing");
        }
        LOG.info("Seeding is done...");
    }
}
