package com.example.a2_runalliance.service;

import com.example.a2_runalliance.dto.RunDTO;
import com.example.a2_runalliance.mapper.RunMapper;
import com.example.a2_runalliance.model.Run;
import com.example.a2_runalliance.repository.RunRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class RunService {

    private final RunRepository runRepository;
    private final RunMapper runMapper;

    @Autowired
    public RunService(RunRepository runRepository, RunMapper runMapper) {
        this.runRepository = runRepository;
        this.runMapper = runMapper;
    }

    public List<RunDTO> getAllRuns() {
        List<Run> runs = runRepository.findAll();
        return runs.stream()
                .map(runMapper::runToRunDTO)
                .collect(Collectors.toList());
    }

    public RunDTO getRunById(Long id) {
        Optional<Run> optionalRun = runRepository.findById(id);
        return optionalRun.map(runMapper::runToRunDTO).orElse(null);
    }

    public RunDTO createRun(RunDTO runDTO) {
        Run run = runMapper.runDTOToRun(runDTO);
        run = runRepository.save(run);
        return runMapper.runToRunDTO(run);
    }

    public RunDTO updateRun(Long id, RunDTO runDTO) {
        Run runToUpdate = runRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Run not found with id: " + id));

        runMapper.updateRunFromDTO(runDTO, runToUpdate);

        runToUpdate = runRepository.save(runToUpdate);
        return runMapper.runToRunDTO(runToUpdate);
    }

    public void deleteRun(Long id) {
        runRepository.deleteById(id);
    }
}