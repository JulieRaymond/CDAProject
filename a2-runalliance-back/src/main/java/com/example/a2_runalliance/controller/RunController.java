package com.example.a2_runalliance.controller;

import com.example.a2_runalliance.model.Run;
import com.example.a2_runalliance.repository.RunRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/runs")
public class RunController {

    private final RunRepository runRepository;

    @Autowired
    public RunController(RunRepository runRepository) {
        this.runRepository = runRepository;
    }

    @GetMapping
    public ResponseEntity<List<Run>> getAllRuns() {
        List<Run> runs = runRepository.findAll();
        if (runs.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(runs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Run> getRunById(@PathVariable Long id) {
        Optional<Run> optionalRun = runRepository.findById(id);
        if (optionalRun.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Run run = optionalRun.get();
        return ResponseEntity.ok(run);
    }

    @PostMapping
    public ResponseEntity<Run> createRun(@RequestBody Run run) {
        Run savedRun = runRepository.save(run);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRun);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Run> updateRun(@PathVariable Long id, @RequestBody Run runDetails) {
        Optional<Run> optionalRun = runRepository.findById(id);
        if (optionalRun.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Run run = optionalRun.get();
        run.setTitle(runDetails.getTitle());
        run.setDescription(runDetails.getDescription());
        run.setDate(runDetails.getDate());
        run.setTime(runDetails.getTime());
        run.setLocation(runDetails.getLocation());
        run.setDifficultyLevel(runDetails.getDifficultyLevel());
        run.setDistanceKm(runDetails.getDistanceKm());
        run.setDurationMinutes(runDetails.getDurationMinutes());

        Run updatedRun = runRepository.save(run);
        return ResponseEntity.ok(updatedRun);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRun(@PathVariable Long id) {
        Optional<Run> optionalRun = runRepository.findById(id);
        if (optionalRun.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Run run = optionalRun.get();
        runRepository.delete(run);
        return ResponseEntity.noContent().build();
    }
}