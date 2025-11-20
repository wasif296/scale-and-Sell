import React, { useState } from "react";
import {
  Table,
  TextInput,
  Select,
  Group,
  Badge,
  Textarea,
  ActionIcon,
  Paper,
  Text,
  Modal,
  Button,
  Title,
} from "@mantine/core";
import { IconEye, IconMail, IconTrash, IconSearch } from "@tabler/icons-react";

interface User {
  name: string;
  email: string;
  role: string;
  joinDate: string;
  status: "Active" | "Inactive";
  verifications: number;
}

const initialUsers: User[] = [
  {
    name: "Ali Hassan",
    email: "ali@example.com",
    role: "Seller",
    joinDate: "2025-01-10",
    status: "Active",
    verifications: 3,
  },
  {
    name: "Fatima Ahmed",
    email: "fatima@example.com",
    role: "Investor",
    joinDate: "2025-01-15",
    status: "Active",
    verifications: 2,
  },
  {
    name: "Mohammad Khan",
    email: "mohammad@example.com",
    role: "Seller",
    joinDate: "2025-01-20",
    status: "Active",
    verifications: 1,
  },
  {
    name: "Zainab Ali",
    email: "zainab@example.com",
    role: "Investor",
    joinDate: "2024-12-15",
    status: "Inactive",
    verifications: 2,
  },
];

const UsersTable: React.FC = () => {
  const [users, setUsers] = useState(initialUsers);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string | null>(null);

  const [viewUser, setViewUser] = useState<User | null>(null);
  const [messageUser, setMessageUser] = useState<User | null>(null);
  const [deleteUser, setDeleteUser] = useState<User | null>(null);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter ? user.role === roleFilter : true;
    return matchesSearch && matchesRole;
  });

  const handleDelete = () => {
    if (deleteUser) {
      setUsers(users.filter((u) => u.email !== deleteUser.email));
      setDeleteUser(null);
    }
  };

  return (
    <>
      <Title order={2}>User Management</Title>

      <Text c="dimmed" mb="lg">
        Manage platform users and their roles
      </Text>
      <Modal
        opened={!!viewUser}
        onClose={() => setViewUser(null)}
        title="User Details"
        centered
      >
        {viewUser && (
          <>
            <Text fw={600} mb="xs">
              {viewUser.name}
            </Text>
            <Text>
              Email:
              {viewUser.email}
            </Text>
            <Text>Role: {viewUser.role}</Text>
            <Text>Join Date: {viewUser.joinDate}</Text>
            <Text>Status: {viewUser.status}</Text>
            <Text>Verifications: {viewUser.verifications}</Text>
          </>
        )}
      </Modal>

      <Modal
        opened={!!messageUser}
        onClose={() => setMessageUser(null)}
        title={`Send Message to ${messageUser?.name}`}
        centered
      >
        {messageUser && (
          <>
            <Textarea
              placeholder="Type your message..."
              mb="sm"
              autosize
              minRows={3}
            />
            <Button
              fullWidth
              color="green"
              onClick={() => setMessageUser(null)}
            >
              Send Message
            </Button>
          </>
        )}
      </Modal>

      <Modal
        opened={!!deleteUser}
        onClose={() => setDeleteUser(null)}
        title="Confirm Delete"
        centered
      >
        <Text mb="md">
          Are you sure you want to delete <strong>{deleteUser?.name}</strong>?
        </Text>
        <Group justify="flex-end">
          <Button variant="default" onClick={() => setDeleteUser(null)}>
            Cancel
          </Button>
          <Button c="red" onClick={handleDelete}>
            Delete
          </Button>
        </Group>
      </Modal>

      <Paper shadow="xs" p="md" radius="md" withBorder>
        <Group justify="space-between" mb="md">
          <TextInput
            placeholder="Search by name or email..."
            leftSection={<IconSearch size={16} />}
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            radius="md"
            style={{ flex: 1, maxWidth: 400 }}
          />

          <Select
            placeholder="All Roles"
            data={["Seller", "Investor"]}
            value={roleFilter}
            onChange={setRoleFilter}
            clearable
            radius="md"
            style={{ maxWidth: 150 }}
          />
        </Group>

        <Table
          highlightOnHover
          verticalSpacing="sm"
          horizontalSpacing="md"
          withTableBorder
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Join Date</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Verifications</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {filteredUsers.map((user, i) => (
              <Table.Tr key={i}>
                <Table.Td fw={500}>{user.name}</Table.Td>
                <Table.Td>{user.email}</Table.Td>
                <Table.Td>{user.role}</Table.Td>
                <Table.Td>{user.joinDate}</Table.Td>

                <Table.Td>
                  <Badge
                    color={user.status === "Active" ? "green" : "yellow"}
                    variant="light"
                  >
                    {user.status}
                  </Badge>
                </Table.Td>
                <Table.Td>{user.verifications}</Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <ActionIcon
                      variant="subtle"
                      color="green"
                      onClick={() => setViewUser(user)}
                    >
                      <IconEye size={16} />
                    </ActionIcon>
                    <ActionIcon
                      variant="subtle"
                      color="blue"
                      onClick={() => setMessageUser(user)}
                    >
                      <IconMail size={16} />
                    </ActionIcon>

                    <ActionIcon
                      variant="subtle"
                      color="red"
                      onClick={() => setDeleteUser(user)}
                    >
                      <IconTrash size={16} />
                    </ActionIcon>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </>
  );
};

export default UsersTable;
