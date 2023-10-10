package org.slash;

import io.quarkus.logging.Log;
import io.quarkus.scheduler.Scheduled;
import jakarta.enterprise.context.ApplicationScoped;
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

    @Scheduled(every = "30s")
    void cronJob() {
        LOG.info("executing cronjob");
        LOG.info("Clearing database...");
        Long items = delete();
        LOG.info("Database cleared, seeding it now...");
        if (pythonScraperClient.triggerScraper().getStatus() == 500){
            Log.info("The scraper is failing");
        }
    }
}
