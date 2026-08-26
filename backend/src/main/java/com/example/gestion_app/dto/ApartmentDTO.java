package com.example.gestion_app.dto;

import com.example.gestion_app.entity.Apartment;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ApartmentDTO {
    private Long id;
    private String address;
    private String city;
    private double m2;
    private int purchasePrice;
    private int yearConstruction;


    public ApartmentDTO entityToDtoAppartement(Apartment apartment) {
        return new ApartmentDTO()
                .setId(apartment.getId())
                .setAddress(apartment.getAddress())
                .setCity(apartment.getCity())
                .setM2(apartment.getM2())
                .setPurchasePrice(apartment.getPurchasePrice())
                .setYearConstruction(apartment.getConstructionYear());
    }
}