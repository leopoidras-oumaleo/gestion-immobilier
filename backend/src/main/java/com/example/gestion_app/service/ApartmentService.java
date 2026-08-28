package com.example.gestion_app.service;

import com.example.gestion_app.dto.ApartmentDTO;
import com.example.gestion_app.entity.Apartment;
import com.example.gestion_app.repository.ApartmentRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApartmentService {
    private final ApartmentRepository apartmentRepository;

    public ApartmentDTO createAppartement(ApartmentDTO dto) {
        Apartment apartment = apartmentRepository.save(new Apartment()
                .setAddress(dto.getAddress())
                .setCity(dto.getCity())
                .setSquareMeters(dto.getSquareMeters())
                .setPurchasePrice(dto.getPurchasePrice())
                .setConstructionYear(dto.getConstructionYear())
                .setDownPayment(dto.getDownPayment())
                .setNotaryFees(dto.getNotaryFees())
                .setBrokerFees(dto.getBrokerFees())
                .setFileFees(dto.getFileFees())
                .setGuaranteeFees(dto.getGuaranteeFees())
                .setPropertyTax(dto.getPropertyTax()));
        return dto.entityToDtoAppartement(apartment);
    }

    public List<ApartmentDTO> getAllAppartements() {
        ApartmentDTO apartmentDTO = new ApartmentDTO();
        return apartmentRepository.findAll()
                .stream()
                .map(apartmentDTO::entityToDtoAppartement)
                .toList();
    }

    public ApartmentDTO getAppartementById(Long id) {
        Apartment apartment = apartmentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Apartment not found with id " + id));
        return new ApartmentDTO().entityToDtoAppartement(apartment);
    }
}