package org.example.controller;

import org.example.model.Country;
import org.example.services.CountryServices;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/countries")
public class Controller {
    private final CountryServices countryServices;

    public Controller(CountryServices countryServices) {
        this.countryServices = countryServices;
    }

    @PostMapping
    public ResponseEntity<Country> createCountry(@RequestBody Country country){
        Country savedCountry = countryServices.createCountry(country);
        return new ResponseEntity<>(savedCountry, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Country> getCountry(@PathVariable("id") long countryId) throws Exception {
        Country country = countryServices.getElementById(countryId);
        return ResponseEntity.ok(country);
    }

    @GetMapping
    public ResponseEntity<List<Country>> getAllCountries(){
        try {
            List<Country> allCountries = countryServices.getAllCountries();
            return ResponseEntity.ok(allCountries);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
