package com.example.a2_runalliance.controller;

import com.example.a2_runalliance.dto.RunDTO;
import com.example.a2_runalliance.service.RunService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/runs")
public class RunController {

    private final RunService runService;

    @Autowired
    public RunController(RunService runService) {
        this.runService = runService;
    }

    @GetMapping
    public ResponseEntity<List<RunDTO>> getAllRuns() {
        List<RunDTO> runs = runService.getAllRuns();
        if (runs.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(runs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RunDTO> getRunById(@PathVariable Long id) {
        RunDTO run = runService.getRunById(id);
        if (run == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(run);
    }

    @PostMapping
    public ResponseEntity<RunDTO> createRun(@RequestBody RunDTO runDTO) {
        RunDTO createdRun = runService.createRun(runDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRun);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RunDTO> updateRun(@PathVariable Long id, @RequestBody RunDTO runDTO) {
        RunDTO updatedRun = runService.updateRun(id, runDTO);
        if (updatedRun == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedRun);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRun(@PathVariable Long id) {
        runService.deleteRun(id);
        return ResponseEntity.noContent().build();
    }
}