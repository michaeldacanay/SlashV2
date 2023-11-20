package org.slash.models;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;
import java.util.List;

import static jakarta.persistence.GenerationType.SEQUENCE;


/**
 * Our item entity meant to represent various items like Laptops, Desktops, Phones, ETC
 * Automatically generating an ID
 * Our project is utilizing the repository pattern with Panache and Hibernate ORM
 * .
 * Usage (more example on the documentation)
 * {@code
 *     public void doSomething() {
 *         Item entity1 = new Item();
 *         entity1.field = "field-1";
 *         entity1.persist();
 *         List<Item> entities = MyEntity.listAll();
 *     }
 * }
 */
@Entity
@Table(name = "\"User\"")
public class User {
//    @Id
//    @GeneratedValue
//    private Long id;


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    public Long id;

    @Column(columnDefinition="text", length=10485760)
    public String email;

    @OneToMany
    public List<Item> wishlist;

    public List<String> searchHistory;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Item> getWishlist() { return wishlist; }

    public void setWishlist(List<Item> wishlist) { this.wishlist = wishlist; }

    public List<String> getSearchHistory() { return searchHistory; }

    public void setSearchHistory(List<String> searchHistory) { this.searchHistory = searchHistory; }

}