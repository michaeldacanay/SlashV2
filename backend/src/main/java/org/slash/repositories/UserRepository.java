package org.slash.repositories;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.slash.models.User;

import java.util.List;

@ApplicationScoped
public class UserRepository implements PanacheRepository<User> {

}
