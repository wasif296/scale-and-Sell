import { useState } from "react";
import { Card, Text, Group, Button, Table, Modal, Badge } from "@mantine/core";

// Type for a table row
interface TransactionRow {
  buyer: string;
  business: string;
  amount: string;
  status: "Holding" | "Pending" | "Released";
  date: string;
}

export default function EscrowDashboard() {
  const [opened, setOpened] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TransactionRow | null>(null);

  const stats = [
    { label: "Total in Escrow", value: "1.05B", icon: "$" },
    { label: "Pending Release", value: "5M", icon: "⏱️" },
    { label: "Completed Deals", value: "8", icon: "✔️" },
  ];

  const rows: TransactionRow[] = [
    {
      buyer: "Ahmed Khan",
      business: "E-commerce Platform",
      amount: "5.0M",
      status: "Holding",
      date: "2025-01-15",
    },
    {
      buyer: "Fatima Ali",
      business: "Mobile App",
      amount: "2.0M",
      status: "Pending",
      date: "2025-01-20",
    },
    {
      buyer: "Mohammad Hassan",
      business: "SaaS Solution",
      amount: "3.5M",
      status: "Released",
      date: "2024-12-10",
    },
  ];

  const statusColor: Record<TransactionRow["status"], string> = {
    Holding: "blue",
    Pending: "yellow",
    Released: "green",
  };

  const openDetails = (row: TransactionRow) => {
    setSelectedRow(row);
    setOpened(true);
  };

  return (
    <div className="w-full p-6 bg-[#F4F9F4] min-h-screen">
      <Text size="xl" fw={700}>
        Escrow Transactions
      </Text>
      <Text mb={20} c="dimmed">
        Manage your secure payments
      </Text>

      <Group grow mb={30}>
        {stats.map((s, i) => (
          <Card key={i} shadow="sm" radius="md" padding="lg">
            <Text size="sm" c="dimmed">
              {s.label}
            </Text>
            <Group>
              <Text size="xl" fw={700}>
                {s.value}
              </Text>
              <Text>{s.icon}</Text>
            </Group>
          </Card>
        ))}
      </Group>

      <Card shadow="sm" radius="md" padding="lg">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Buyer</Table.Th>
              <Table.Th>Business</Table.Th>
              <Table.Th>Amount</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {rows.map((row, idx) => (
              <Table.Tr key={idx}>
                <Table.Td>{row.buyer}</Table.Td>
                <Table.Td>{row.business}</Table.Td>
                <Table.Td style={{ color: "green", fontWeight: 700 }}>
                  {row.amount}
                </Table.Td>
                <Table.Td>
                  <Badge color={statusColor[row.status]} variant="light">
                    {row.status}
                  </Badge>
                </Table.Td>
                <Table.Td>{row.date}</Table.Td>
                <Table.Td>
                  <Button
                    size="xs"
                    radius="md"
                    color="green"
                    onClick={() => openDetails(row)}
                  >
                    View Details
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Transaction Details"
        centered
      >
        {selectedRow && (
          <div>
            <Text fw={700}>{selectedRow.buyer}</Text>
            <Text>{selectedRow.business}</Text>
            <Text fw={700} mt="md">
              Amount: {selectedRow.amount}
            </Text>
            <Text>Status: {selectedRow.status}</Text>
            <Text>Date: {selectedRow.date}</Text>
          </div>
        )}
      </Modal>
    </div>
  );
}
