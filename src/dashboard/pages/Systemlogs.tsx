import { useState } from "react";
import {
  Card,
  Table,
  Text,
  Stack,
  Title,
  Badge,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

type LogItem = {
  timestamp: string;

  action: string;
  user: string;
  status: "Success" | "Warning" | "Error";
  details: string;
};

export default function SystemLogs() {
  const [search, setSearch] = useState("");

  const logs: LogItem[] = [
    {
      timestamp: "2025-01-22 14:30:45",
      action: "Listing Approved",
      user: "Admin",
      status: "Success",
      details: "E-commerce Platform listing approved",
    },

    {
      timestamp: "2025-01-22 14:25:12",
      action: "User Registration",
      user: "System",
      status: "Success",
      details: "New investor registered: Ahmed Khan",
    },

    {
      timestamp: "2025-01-22 14:20:30",
      action: "Escrow Release",
      user: "Admin",
      status: "Success",
      details: "Transaction #123 released successfully",
    },
    {
      timestamp: "2025-01-22 14:15:00",
      action: "Failed Login",
      user: "System",
      status: "Warning",
      details: "Multiple failed attempts from IP 192.168.1.1",
    },

    {
      timestamp: "2025-01-22 14:10:22",
      action: "Database Backup",
      user: "System",
      status: "Success",
      details: "Daily backup completed successfully",
    },
  ];

  const filteredLogs = logs.filter(
    (log) =>
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.user.toLowerCase().includes(search.toLowerCase()) ||
      log.details.toLowerCase().includes(search.toLowerCase()) ||
      log.status.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusBadge = (status: LogItem["status"]) => {
    switch (status) {
      case "Success":
        return (
          <Badge color="green" variant="light">
            Success
          </Badge>
        );
      case "Warning":
        return (
          <Badge color="yellow" variant="light">
            Warning
          </Badge>
        );
      case "Error":
        return (
          <Badge color="red" variant="light">
            Error
          </Badge>
        );
      default:
        return <Badge color="gray">{status}</Badge>;
    }
  };

  const rows = filteredLogs.map((log) => (
    <Table.Tr key={log.timestamp + log.action}>
      <Table.Td>{log.timestamp}</Table.Td>
      <Table.Td>{log.action}</Table.Td>
      <Table.Td>{log.user}</Table.Td>
      <Table.Td>{getStatusBadge(log.status)}</Table.Td>

      <Table.Td>{log.details}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack p="xl" bg="#f7fdf7" style={{ minHeight: "100vh" }}>
      <div>
        <Title order={2}>System Logs</Title>
        <Text c="dimmed" fz="sm">
          View all system activities and events
        </Text>
      </div>

      <TextInput
        placeholder="Search logs..."
        leftSection={<IconSearch size={16} />}
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        radius="md"
        size="md"
        mt="sm"
        style={{ maxWidth: 400 }}
      />

      <Card shadow="sm" radius="md" p="lg" withBorder>
        <Table highlightOnHover verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Timestamp</Table.Th>
              <Table.Th>Action</Table.Th>
              <Table.Th>User</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Details</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Card>
    </Stack>
  );
}
