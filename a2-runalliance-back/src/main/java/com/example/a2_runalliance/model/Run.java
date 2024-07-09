package com.example.a2_runalliance.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "Run")
public class Run {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private Long courseId;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private LocalTime time;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private DifficultyLevel difficultyLevel;

    @Column(nullable = false)
    private Double distanceKm;

    @Column(nullable = false)
    private Integer durationMinutes;

    @OneToMany(mappedBy = "course")
    private List<CourseRegistration> inscriptions = new ArrayList<>();
}
