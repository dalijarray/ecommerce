package com.example.demo.model;
import java.util.List;
public class Order {
    private String orderId;
    private String clientId;
    private List<CartItem> cartItems;
    private String adress;
    private double totalPrice;

    // Constructors
    public Order() {
    }

    public Order(String orderId, String clientId, List<CartItem> cartItems, String adress, double totalPrice) {
        this.orderId = orderId;
        this.clientId = clientId;
        this.cartItems = cartItems;
        this.adress = adress;
        this.totalPrice = totalPrice;
    }

    // Getters and setters
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }
    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }
    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}