import {
  Box,
  Group,
  Text,
  Card,
  Button,
  SimpleGrid,
  Divider,
} from "@mantine/core";
import {
  IconPackage,
  IconTrendingUp,
  IconChartBar,
  IconMessage,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function SellerDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Listings",
      value: "5",
      icon: <IconPackage size={26} color="#0B5C0B" />,
    },
    {
      title: "Active Listings",
      value: "3",
      icon: <IconTrendingUp size={26} color="#0B5C0B" />,
    },
    {
      title: "Pending Approval",
      value: "2",
      icon: <IconChartBar size={26} color="#0B5C0B" />,
    },
    {
      title: "New Messages",
      value: "7",
      icon: <IconMessage size={26} color="#0B5C0B" />,
    },
  ];

  const activity = [
    {
      title: "Listing Approved",
      description: "Your E-commerce Platform listing was approved",
      time: "2 hours ago",
    },
    {
      title: "New Message",
      description: "Investor interested in your SaaS solution",
      time: "4 hours ago",
    },
    {
      title: "Listing Created",
      description: "Successfully created Mobile App listing",
      time: "1 day ago",
    },
  ];

  return (
    <Box bg="#F4FAF4" p="lg" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Box mb="md">
        <Text fw={700} fz={26}>
          Seller Dashboard
        </Text>
        <Text fz={12} c="dimmed">
          Welcome back! Here’s your business overview.
        </Text>
      </Box>

      {/* Stats Cards */}
      <SimpleGrid cols={4} spacing="md" mb="lg">
        {stats.map((item, i) => (
          <Card key={i} radius="md" withBorder p="md" bg="white">
            <Group justify="space-between">{item.icon}</Group>
            <Text fz={12} mt={5} c="dimmed">
              {item.title}
            </Text>
            <Text fw={700} fz={20}>
              {item.value}
            </Text>
          </Card>
        ))}
      </SimpleGrid>

      {/* Quick Actions */}
      <Text fw={600} mb={6}>
        Quick Actions
      </Text>

      <Group grow mb="lg">
        <Button
          color="green"
          radius="sm"
          style={{ background: "#0B5C0B" }}
          onClick={() => navigate("/my-listings")}
        >
          Manage Listings
        </Button>

        {/* ✅ Navigate to Messages */}
        <Button
          variant="outline"
          color="green"
          radius="sm"
          onClick={() => navigate("/messages")}
        >
          View Messages
        </Button>

        {/* ✅ Navigate to Escrow */}
        <Button
          variant="outline"
          color="green"
          radius="sm"
          onClick={() => navigate("/escrow")}
        >
          Check Escrow
        </Button>
      </Group>

      {/* Recent Activity */}
      <Card radius="md" withBorder p={0}>
        <Box p="md">
          <Text fw={600}>Recent Activity</Text>
        </Box>

        <Divider />

        {activity.map((item, i) => (
          <Box key={i}>
            <Group justify="space-between" p="md">
              <Box>
                <Text fw={600}>{item.title}</Text>
                <Text fz={12} c="dimmed">
                  {item.description}
                </Text>
              </Box>

              <Text fz={10} c="dimmed">
                {item.time}
              </Text>
            </Group>

            {i !== activity.length - 1 && <Divider />}
          </Box>
        ))}
      </Card>
    </Box>
  );
}
