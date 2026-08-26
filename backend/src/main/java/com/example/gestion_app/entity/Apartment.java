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

    @Column(name = "square_meters", nullable = false)
    private double squareMeters;

    @Column(name = "purchase_price", nullable = false)
    private int purchasePrice;

    @Column(name = "construction_year")
    private int constructionYear;

    @Column(name = "down_payment")
    private Integer downPayment;

    @Column(name = "notary_fees")
    private Integer notaryFees;

    @Column(name = "broker_fees")
    private Integer brokerFees;

    @Column(name = "file_fees")
    private Integer fileFees;

    @Column(name = "guarantee_fees")
    private Integer guaranteeFees;

    @Column(name = "property_tax")
    private Integer propertyTax;
}