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
  Select,
} from "@mantine/core";

import { roles, useAuth } from "../context/AuthContext";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<roles | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password || !role) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const newUser = {
        id: "10",
        name,
        email,
        role,
        token: "register-token-123",
      };

      login(newUser);

      if (role === roles.Investor) {
        navigate("/investordashboard/dashboard");
      } else if (role === roles.Seller) {
        navigate("/sellerDashboard");
      } else {
        navigate("/dashboard");
      }
    }, 1000);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8faf9",
      }}
    >
      <Paper shadow="md" radius="md" p="xl" style={{ width: 400 }}>
        <Stack gap={16}>
          <Title order={2} style={{ textAlign: "center" }}>
            Create Account
          </Title>

          <TextInput
            label="Full Name"
            placeholder="Wasif"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <TextInput
            label="Email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />

          <Select
            label="Select Role"
            placeholder="Choose role"
            data={[
              { value: roles.Investor, label: "Investor" },
              { value: roles.Seller, label: "Seller" },
            ]}
            value={role ?? ""}
            onChange={(value) => setRole(value as roles)}
          />

          {error && (
            <Text c="red" size="sm">
              {error}
            </Text>
          )}

          <Button color="green" onClick={handleRegister} loading={loading}>
            Register
          </Button>

          <Text size="sm" c="dimmed" style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Text
              component="span"
              c="green"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Text>
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Register;
