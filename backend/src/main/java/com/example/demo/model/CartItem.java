package com.example.demo.model;

public class CartItem {
        private String id;
        private String productId;
        private int quantity;
        
    
        public CartItem(String productId, int quantity) {
            this.productId = productId;
            this.quantity = quantity;
        }
    
        // Getters and setters
        public String getProductId() {
            return productId;
        }
    
        public void setProductId(String productId) {
            this.productId = productId;
        }
    
        public int getQuantity() {
            return quantity;
        }
    
        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }
    
       
        @Override
        public String toString() {
            return "CartItem{" +
                    "productId='" + productId + '\'' +
                    ", quantity=" + quantity +
                    '}';
        }
        public String getId() {
            return this.id ;
        } 

        public void setId(String id) {
            this.id=id;
        }    
}
