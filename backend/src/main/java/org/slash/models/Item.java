package org.slash.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


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
    @Id
    @GeneratedValue
    private Long id;
    public String name;
    public String itemType;
    public String itemURl;
    public int price;
    public int discountAmount;
    public int discountPrice;

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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscountAmount() {
        return discountAmount;
    }

    public void setDiscountAmount(int discountAmount) {
        this.discountAmount = discountAmount;
    }

    public int getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(int discountPrice) {
        this.discountPrice = discountPrice;
    }
}
