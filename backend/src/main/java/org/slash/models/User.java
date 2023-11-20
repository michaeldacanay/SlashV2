package org.slash.models;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;
import java.util.List;
import Java.util.ArrayList;

import static jakarta.persistence.GenerationType.SEQUENCE;



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

    @Column
    @OneToMany
    public List<Item> wishlist;

    @Column
    public List<String> searchHistory = new ArrayList<>();

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