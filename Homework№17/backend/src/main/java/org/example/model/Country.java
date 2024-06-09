package org.example.model;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Entity
@Table(name = "country_info")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "population")
    private Long population;
    @Column(name = "currency")
    private String currency;
    @Column(name = "source")
    private String sourceOfThePicture;

    public Country() {
    }

    public Country(String name, Long population, String currency, String sourceOfThePicture) {
        this.name = name;
        this.population = population;
        this.currency = currency;
        this.sourceOfThePicture = sourceOfThePicture;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPopulation() {
        return population;
    }

    public void setPopulation(Long population) {
        this.population = population;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getSourceOfThePicture() {
        return sourceOfThePicture;
    }

    public void setSourceOfThePicture(String sourceOfThePicture) {
        this.sourceOfThePicture = sourceOfThePicture;
    }
}
