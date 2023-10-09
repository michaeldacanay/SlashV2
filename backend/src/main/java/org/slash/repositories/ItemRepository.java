package org.slash.repositories;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.slash.models.Item;

import java.util.List;

@ApplicationScoped
public class ItemRepository implements PanacheRepository<Item> {

}
