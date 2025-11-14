import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Group,
  Grid,
  Paper,
  Stack,
  rem,
} from "@mantine/core";
import {
  IconShieldCheck,
  IconCheck,
  IconFileDescription,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <IconShieldCheck size={32} color="#006200" />,
      title: "Secure Escrow",
      text: "All transactions are protected through a secure escrow system.",
    },
    {
      icon: <IconCheck size={32} color="#006200" />,
    title: "Verified Listings",
      text: "Admin-verified businesses ensuring legitimacy and trust.",
    },
    {
icon: <IconFileDescription size={32} 
color="#006200" />,
      title: "Digital Contracts",
      text: "Auto-generated contracts with e-signature capabilities.",
    },
  ];

  return (
    <Box style={{ backgroundColor: "#f8faf9", minHeight: "100vh" }}>
      
      <Container size="md" pt={100} pb={120}>
        <Stack gap="md" align="center">
          
    <Title order={1} 
      fw={800} style={{ textAlign: "center" }}>
            Discover Your Perfect Startup Space
          </Title>
          <Text c="dimmed" maw={600} 
        style={{ textAlign: "center" }}>
            Scale & Sell is Pakistan’s secure marketplace where business owners
            list startups for sale or investment, and investors safely acquire
            verified opportunities.
          </Text>

          <Group mt="md" style={{ justifyContent: "center" }}>
   <Button size="md" color="#006200" radius="md"
   onClick={() => navigate("/login")} >
        Get Started
      </Button>
            
          </Group>
        </Stack>
      </Container>

      
      <Container size="lg" pb={100}>
        <Stack gap="xl" align="center">
<Title order={3} fw={700} style={{ textAlign: "center" }}>
            Platform Features
          </Title>

          <Grid gutter="xl" justify="center">
            {features.map((feature, index) => (
              <Grid.Col
  key={index}
  span={{ base: 12, sm: 6, md: 4 }}
>
        <Paper
                  withBorder
                  radius="md"
                  p="lg"
                  shadow="xs"
                  style={{ height: rem(180), textAlign: "center" }}
                >
                  <Stack gap="xs" align="center">
                    {feature.icon}
                    <Title order={4}>{feature.title}</Title>
            <Text c="dimmed" size="sm">
                      {feature.text}
                    </Text>
                  </Stack>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingPage;
