import {
  Paper,
  Text,
  Group,
  Button,
  SimpleGrid,
  Box,
  Divider,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

import {
  IconCoins,
  IconTarget,
  IconTrendingUp,
  IconBriefcase,
} from "@tabler/icons-react";

export default function InvestorDashboard() {
  const navigate = useNavigate(); // initialize navigate

  return (
    <Box p="lg" bg="#f6fbf6" style={{ minHeight: "100vh" }}>
      <Text fw={700} size="xl" mb={4}>
        Investor Dashboard
      </Text>
      <Text c="dimmed" mb="lg">
        Track your startup investments and portfolio growth
      </Text>

      <SimpleGrid cols={4} spacing="lg" mb="xl">
        <Paper withBorder p="lg" radius="md">
          <Group>
            <IconCoins size={28} color="green" />
            <Box>
              <Text c="dimmed" size="sm">
                Total Invested
              </Text>
              <Text size="xl" fw={700}>
                12.0M
              </Text>
            </Box>
          </Group>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Group>
            <IconTarget size={28} color="green" />
            <Box>
              <Text c="dimmed" size="sm">
                Active Investments
              </Text>
              <Text size="xl" fw={700}>
                3
              </Text>
            </Box>
          </Group>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Group>
            <IconTrendingUp size={28} color="green" />
            <Box>
              <Text c="dimmed" size="sm">
                Return on Investment
              </Text>
              <Text size="xl" fw={700}>
                18.5%
              </Text>
            </Box>
          </Group>
        </Paper>

        <Paper withBorder p="lg" radius="md">
          <Group>
            <IconBriefcase size={28} color="green" />
            <Box>
              <Text c="dimmed" size="sm">
                Portfolio Value
              </Text>
              <Text size="xl" fw={700}>
                14.22M
              </Text>
            </Box>
          </Group>
        </Paper>
      </SimpleGrid>

      <Text fw={600} size="md" mb="sm">
        Quick Actions
      </Text>

      <Group grow mb="lg">
        <Button
          color="green"
          size="md"
          radius="md"
          onClick={() => navigate("/investor-dashboard/explore")} // nested route
        >
          Explore Startups
        </Button>
        <Button
          variant="outline"
          color="green"
          size="md"
          radius="md"
          onClick={() => navigate("/investor-dashboard/portfolio")}
        >
          View Portfolio
        </Button>
        <Button
          variant="outline"
          color="green"
          size="md"
          radius="md"
          onClick={() => navigate("/investor-dashboard/messages")}
        >
          Send Inquiries
        </Button>
      </Group>

      <Paper withBorder radius="md" p="lg">
        <Text fw={600} mb="md">
          Active Investments
        </Text>

        <Group justify="space-between" mb="md">
          <Box>
            <Text fw={600}>E-commerce Platform</Text>
            <Text size="sm" c="dimmed">
              Invested: PKR 5.0M
            </Text>
          </Box>
          <Box>
            <Text fw={700} c="green">
              +0.85M
            </Text>
            <Text size="xs" c="green">
              Growing
            </Text>
          </Box>
        </Group>
        <Divider />

        <Group justify="space-between" my="md">
          <Box>
            <Text fw={600}>Mobile App</Text>
            <Text size="sm" c="dimmed">
              Invested: PKR 3.0M
            </Text>
          </Box>
          <Box>
            <Text fw={700} c="green">
              +0.45M
            </Text>
            <Text size="xs" c="dimmed">
              Stable
            </Text>
          </Box>
        </Group>
        <Divider />

        <Group justify="space-between" mt="md">
          <Box>
            <Text fw={600}>SaaS Solution</Text>
            <Text size="sm" c="dimmed">
              Invested: PKR 4.0M
            </Text>
          </Box>
          <Box>
            <Text fw={700} c="green">
              +0.92M
            </Text>
            <Text size="xs" c="green">
              Growing
            </Text>
          </Box>
        </Group>
      </Paper>
    </Box>
  );
}
