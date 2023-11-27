package org.slash.models;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;
import java.util.List;
import java.util.ArrayList;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Entity
public class Post {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    public Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;

    public String title;

    public String description;

    public Double price;

    public List<String> imageFiles;

    @OneToMany(mappedBy = "post")
    public List<Comment> comments;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<String> getImageFiles() {
        return imageFiles;
    }

    public void setImageFiles(List<String> imageFiles) {
        this.imageFiles = imageFiles;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}