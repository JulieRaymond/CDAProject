package com.example.a2_runalliance.dto;

import com.example.a2_runalliance.model.DifficultyLevel;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class RunDTO {
    private Long courseId;
    private String title;
    private String description;
    private LocalDate date;
    private LocalTime time;
    private String location;
    private DifficultyLevel difficultyLevel;
    private Double distanceKm;
    private Integer durationMinutes;
}
