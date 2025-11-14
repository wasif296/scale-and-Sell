import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box, Paper ,TextInput ,PasswordInput,Button,Title,Text,Stack,Select} from "@mantine/core";

const Register: React.FC = () => {
 

  const navigate = useNavigate();

  return (
    <Box

    
      style={{
        minHeight: "110vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
     backgroundColor: "#f8faf9",

      }}
    >
      <Paper shadow="md" radius="md" p="xl" style={{ width: "100%", maxWidth: 400 }}>
    <Stack gap="md">
          <Title 
          order={2} style={{ textAlign: "center" }}>
  Create Account

          </Title>
          <Text c="dimmed" style={{ textAlign: "center" }}>
    Join Scale & Sell marketplace</Text>

          <TextInput
            label="Full Name" placeholder="Wasif"
            
          />
    <TextInput
            label="Email"
            placeholder="wasif@example.com"/>


 <PasswordInput
         label="Password"
            placeholder="Your password"
            
          />
          <Select
      label="I am a:
"
      
      data={['Business owner', 'Investor', 'Admin']}
    />

          <Button color="#006200" radius="md" >
            Register
          </Button>

          <Text size="sm" c="dimmed" style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <span
 style={{ color: "#006200", cursor: "pointer", fontWeight: 500 }}
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </Text>

             </Stack>
</Paper>
    </Box>
      );


};

export default Register;
