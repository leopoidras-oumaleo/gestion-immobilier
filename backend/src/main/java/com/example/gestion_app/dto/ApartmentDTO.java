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
    private double squareMeters;
    private Integer purchasePrice;
    private Integer constructionYear;

    private Integer downPayment;
    private Integer notaryFees;
    private Integer brokerFees;
    private Integer fileFees;
    private Integer guaranteeFees;
    private Integer propertyTax;

    public ApartmentDTO entityToDtoAppartement(Apartment apartment) {
        return new ApartmentDTO()
                .setId(apartment.getId())
                .setAddress(apartment.getAddress())
                .setCity(apartment.getCity())
                .setSquareMeters(apartment.getSquareMeters())
                .setPurchasePrice(apartment.getPurchasePrice())
                .setConstructionYear(apartment.getConstructionYear())
                .setDownPayment(apartment.getDownPayment())
                .setNotaryFees(apartment.getNotaryFees())
                .setBrokerFees(apartment.getBrokerFees())
                .setFileFees(apartment.getFileFees())
                .setGuaranteeFees(apartment.getGuaranteeFees())
                .setPropertyTax(apartment.getPropertyTax());
    }
}