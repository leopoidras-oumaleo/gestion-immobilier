package com.example.gestion_app.controller;

import com.example.gestion_app.dto.ApartmentDTO;
import com.example.gestion_app.service.ApartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/apartments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ApartmentController {

    private final ApartmentService apartmentService;

    @PostMapping
    public ResponseEntity<ApartmentDTO> creerAppartement(@RequestBody ApartmentDTO dto) {
        return ResponseEntity.ok(apartmentService.createAppartement(dto));
    }

    @GetMapping
    public ResponseEntity<List<ApartmentDTO>> getAllAppartements() {
        return ResponseEntity.ok(apartmentService.getAllAppartements());
    }
}