import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Stack,
} from "@mantine/core";


const Login: React.FC = () => {
  
  

  
const navigate = useNavigate();

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8faf9",
      }
  }
    >
      <Paper
        shadow="md"
     radius="md"
        p="xl"
        style={{ width: "100%", 
          maxWidth: 400 }}
      >
        <Stack gap="md">
          <Title order={2} 
        style={{ textAlign: "center" }}>
      Welcome Back
          </Title>
    <Text c="dimmed" style={{ textAlign: "center" }}>
     Sign in to your Scale & Sell account
          </Text>

          <TextInput
            label="Email"
      placeholder="wasif@example.com"
            
            
          />
          <PasswordInput
      label="Password
"
      
      placeholder="Password"
    />


          <Button color="#006200" 
   radius="md" >
            Login
          </Button>
          <Text size="sm" c="dimmed" style={{ textAlign: "center" }}>
    Don’t have an account?{" "}
    <Text
      component="span"
      c="#006200"    style={{ cursor: "pointer", fontWeight: 500 }}
      onClick={() => navigate ("/Register")}
    >
      Register here
    </Text>
  </Text>

      </Stack>
        </Paper>
        <Button color="green" onClick={() => navigate("/dashboard")}>
      Go to Dashboard
    </Button>

    <Button 
   mt={20} color="green" onClick={() => navigate("/investor-dashboard/dashboard")}>
  Go to Investor Dashboard
</Button>
    </Box>
    
  );
};

export default Login;
