package org.slash.models;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;
import java.util.List;
import java.util.ArrayList;

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


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    public List<Post> posts = new ArrayList<Post>();

    @Column
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    public List<Comment> comments = new ArrayList<Comment>();

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

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }
}