package org.slash;

import io.quarkus.scheduler.Scheduled;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.slash.client.PythonScraperClient;
import org.jboss.logging.Logger;

@ApplicationScoped
public class CronJob {
    private static final Logger LOG = Logger.getLogger(CronJob.class);
    @RestClient
    PythonScraperClient pythonScraperClient;
    @Scheduled(every = "10s")
    void cronJob() {
        LOG.info("executing cronjob");
        pythonScraperClient.triggerScraper();
    }
}
