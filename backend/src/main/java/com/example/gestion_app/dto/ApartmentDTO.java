package com.example.gestion_app.dto;

import com.example.gestion_app.entity.Apartment;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ApartmentDTO {
    private Long id;
    private String adress;
    private String city;
    private double m2;
    private int buyPrice;
    private int yearConstruction;


    public ApartmentDTO entityToDtoAppartement(Apartment apartment) {
        return new ApartmentDTO()
                .setId(apartment.getId())
                .setAdress(apartment.getAdress())
                .setCity(apartment.getCity())
                .setM2(apartment.getM2())
                .setBuyPrice(apartment.getBuyPrice())
                .setYearConstruction(apartment.getAnneeConstruction());
    }
}