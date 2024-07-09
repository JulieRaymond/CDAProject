package com.example.a2_runalliance.dto;

import com.example.a2_runalliance.model.ProfileVisibility;
import com.example.a2_runalliance.model.UserRole;
import lombok.Data;

import java.util.List;

@Data
public class UserDTO {
    private Long userId;
    private String username;
    private String email;
    private UserRole role;
    private ProfileVisibility profileVisibility;
    private List<CourseRegistrationDTO> inscriptions;
}
