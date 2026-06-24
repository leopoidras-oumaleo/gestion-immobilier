package com.example.gestion_app.service;

import com.example.gestion_app.dto.ApartmentDTO;
import com.example.gestion_app.entity.Apartment;
import com.example.gestion_app.repository.ApartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApartmentService {
    private final ApartmentRepository apartmentRepository;

    public ApartmentDTO createAppartement(ApartmentDTO dto) {
        Apartment apartment = apartmentRepository.save(new Apartment()
                .setAdress(dto.getAdress())
                .setCity(dto.getCity())
                .setM2(dto.getM2())
                .setBuyPrice(dto.getBuyPrice())
                .setAnneeConstruction(dto.getYearConstruction()));
        return dto.entityToDtoAppartement(apartment);
    }

    public List<ApartmentDTO> getAllAppartements() {
        ApartmentDTO apartmentDTO = new ApartmentDTO();
        return apartmentRepository.findAll()
                .stream()
                .map(apartmentDTO::entityToDtoAppartement)
                .toList();
    }
}
