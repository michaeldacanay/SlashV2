package org.slash.models;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

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
public class Item {
//    @Id
//    @GeneratedValue
//    private Long id;
    @Id
    @Column(length = 512 )
    public String name;
    public String itemType;
    @Column(length = 512 )
    public String itemURl;
    public String store;
    public String price;
    public String discountAmount;
    public String discountPrice;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public String getItemURl() {
        return itemURl;
    }

    public void setItemURl(String itemURl) {
        this.itemURl = itemURl;
    }

    public String getStore() {
        return store;
    }

    public void setStore(String store) {
        this.store = store;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(String discountAmount) {
        this.discountAmount = discountAmount;
    }

    public String getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(String discountPrice) {
        this.discountPrice = discountPrice;
    }
}
