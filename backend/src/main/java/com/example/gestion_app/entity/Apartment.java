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

    @Column(name = "adress", nullable = false)
    private String adress;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "m2", nullable = false)
    private double m2;

    @Column(name = "buy_price", nullable = false)
    private int buyPrice;

    @Column(name = "year_construction")
    private int anneeConstruction;
}