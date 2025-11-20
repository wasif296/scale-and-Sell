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
import { roles, useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const fakeUser = {
        id: "1",
        name: "Wasif",
        email,
        role: roles.Investor,
        token: "login-token-123",
      };

      login(fakeUser);

      navigate("/investor-dashboard/dashboard");
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
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Stack gap={16}>
          <Title order={2} style={{ textAlign: "center" }}>
            Welcome Back
          </Title>
          <Text c="dimmed" style={{ textAlign: "center" }}>
            Sign in to your Scale & Sell account
          </Text>

          <TextInput
            label="Email"
            placeholder="wasif@example.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />

          {error && (
            <Text c="red" size="sm">
              {error}
            </Text>
          )}

          <Button
            color="#006200"
            radius="md"
            onClick={handleLogin}
            loading={loading}
          >
            Login
          </Button>

          <Text size="sm" c="dimmed" style={{ textAlign: "center" }}>
            Don’t have an account?{" "}
            <Text
              component="span"
              c="#006200"
              style={{ cursor: "pointer", fontWeight: 500 }}
              onClick={() => navigate("/Register")}
            >
              Register here
            </Text>
          </Text>
        </Stack>
      </Paper>
      <Button fullWidth color="blue" onClick={() => navigate("/dashboard")}>
        Dashboard
      </Button>

      <Button
        mt={10}
        fullWidth
        color="green"
        onClick={() => navigate("/investor-dashboard/dashboard")}
      >
        InvestorDashboard
      </Button>

      <Button
        mt={10}
        fullWidth
        color="orange"
        onClick={() => navigate("/seller")}
      >
        Seller Dashboard
      </Button>
    </Box>
  );
};

export default Login;
