package org.example.services;

import org.example.model.Country;
import org.example.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServices {

    @Autowired
    private final CountryRepository countryRepository;

    public CountryServices(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public Country getElementById(Long elementId) throws Exception {
        Optional<Country> currentCountry =countryRepository.findById(elementId);
        if (currentCountry.isPresent()){
            return currentCountry.get();
        }else {
            throw new Exception(elementId + " doesn't exists");
        }
    }

    public Country createCountry(Country country){
        return countryRepository.save(country);
    }

    public List<Country> getAllCountries(){
        try {
            List<Country> returnedCounties = countryRepository.findAll().stream().toList();
            return returnedCounties;
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch countries from database", e);
        }
    }
}
