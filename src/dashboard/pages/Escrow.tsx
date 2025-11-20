import { useState } from "react";
import {
  Card,
  Grid,
  Text,
  Table,
  Badge,
  Button,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

type EscrowItem = {
  seller: string;
  buyer: string;
  amount: string;
  status: "Holding" | "Pending" | "Released";
  date: string;
};

type SummaryCard = {
  label: string;
  value: string;
  icon: string;
};

export default function Escrow() {
  const [escrowData, setEscrowData] = useState<EscrowItem[]>([
    {
      seller: "Ali Hassan",
      buyer: "Ahmed Khan",
      amount: "5.0M",
      status: "Holding",
      date: "2025-01-15",
    },
    {
      seller: "Fatima Ahmed",
      buyer: "Mohammad Hassan",
      amount: "2.0M",
      status: "Pending",
      date: "2025-01-20",
    },
    {
      seller: "Mohammad Khan",
      buyer: "Zainab Ali",
      amount: "3.5M",
      status: "Released",
      date: "2024-12-10",
    },
    {
      seller: "Zainab Ali",
      buyer: "Omar Khan",
      amount: "7.0M",
      status: "Holding",
      date: "2025-01-18",
    },
  ]);

  const summaryCards: SummaryCard[] = [
    { label: "Total in Escrow", value: "0.02B", icon: "$" },
    { label: "Pending Release", value: "2.0M", icon: "📈" },
    { label: "Released", value: "3.5M", icon: "✅" },
  ];

  const handleApprove = (seller: string, buyer: string) => {
    setEscrowData((prev) =>
      prev.map((item) =>
        item.seller === seller && item.buyer === buyer
          ? { ...item, status: "Released" }
          : item
      )
    );

    notifications.show({
      title: "Release Approved",
      message: `Funds released for ${seller} → ${buyer}`,
      color: "green",
    });
  };

  const getStatusBadge = (status: EscrowItem["status"]) => {
    switch (status) {
      case "Holding":
        return (
          <Badge color="blue" variant="light">
            Holding
          </Badge>
        );
      case "Pending":
        return (
          <Badge color="yellow" variant="light">
            Pending
          </Badge>
        );
      case "Released":
        return;
        <Badge color="green" variant="light">
          Released
        </Badge>;
      default:
        return (
          <Badge color="gray" variant="light">
            {status}
          </Badge>
        );
    }
  };

  const getActionButton = (item: EscrowItem) => {
    if (item.status === "Pending") {
      return (
        <Button
          color="green"
          size="xs"
          radius="sm"
          onClick={() => handleApprove(item.seller, item.buyer)}
        >
          Approve Release
        </Button>
      );
    } else if (item.status === "Released") {
      return (
        <Button size="xs" radius="sm" variant="default" disabled>
          Released
        </Button>
      );
    }
    return (
      <Button size="xs" radius="sm" variant="default" disabled>
        Holding
      </Button>
    );
  };

  const rows = escrowData.map((item) => (
    <Table.Tr key={item.seller + item.buyer}>
      <Table.Td>{item.seller}</Table.Td>
      <Table.Td>{item.buyer}</Table.Td>
      <Table.Td>
        <Text fw={600}>{item.amount}</Text>
      </Table.Td>
      <Table.Td>{getStatusBadge(item.status)}</Table.Td>
      <Table.Td>{item.date}</Table.Td>
      <Table.Td>{getActionButton(item)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack p="xl" bg="#f7fdf7" style={{ minHeight: "100vh" }}>
      <div>
        <Title order={2}>Escrow Management</Title>
        <Text c="dimmed" fz="sm">
          Monitor and manage all transactions
        </Text>
      </div>

      <Grid mt="md">
        {summaryCards.map((card) => (
          <Grid.Col span={{ base: 12, sm: 4 }} key={card.label}>
            <Card shadow="sm" radius="md" p="lg" withBorder>
              <Stack gap={4}>
                <Text c="dimmed" size="sm">
                  {card.label}
                </Text>
                <Group justify="space-between">
                  <Text fw={700} size="xl" c="green">
                    {card.value}
                  </Text>
                  <Text>{card.icon}</Text>{" "}
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Card shadow="sm" radius="md" p="lg" withBorder>
        <Table highlightOnHover verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Seller</Table.Th>
              <Table.Th>Buyer</Table.Th>
              <Table.Th>Amount</Table.Th>
              <Table.Th>Status</Table.Th>

              <Table.Th>Date</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Card>
    </Stack>
  );
}
