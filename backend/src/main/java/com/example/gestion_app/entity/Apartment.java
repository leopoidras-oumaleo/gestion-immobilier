package com.example.gestion_app.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Table(name = "apartment")
@Data
@Accessors(chain = true)
public class Apartment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "m2", nullable = false)
    private double m2;

    @Column(name = "purchase_price", nullable = false)
    private int purchasePrice;

    @Column(name = "construction_year")
    private int constructionYear;
}