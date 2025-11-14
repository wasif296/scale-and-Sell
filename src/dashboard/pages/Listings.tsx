import React, { useState } from "react";
import {Table,TextInput,Select,Group,Badge,Paper,Button,Text,Title} from "@mantine/core";
import {  IconSearch,
   IconClock,
    IconCheck,
  IconX,
} from "@tabler/icons-react";

interface Listing {
  title: string;
  seller: string;
  price: string;
  location: string;
  status: "Pending" | "Approved" | "Rejected";
  submitted: string;
}

const initialListings: Listing[] = [
  {
    title: "E-commerce Platform",
    seller: "Ali Hassan",
    price: "5.0M",
    location: "Karachi",
    status: "Pending",
    submitted: "2025-01-22",
  },
  {
    title: "Mobile App",
    seller: "Fatima Ahmed",
    price: "2.0M",
    location: "Lahore",
    status: "Approved",
    submitted: "2025-01-20",
  },
  {
    title: "SaaS Solution",
    seller: "Mohammad Khan",
    price: "7.0M",
    location: "Islamabad",
    status: "Pending",
    submitted: "2025-01-21",
  },
  {
    title: "Game Studio",
    seller: "Zainab Ali",
    price: "4.5M",
    location: "Karachi",
    status: "Rejected",
    submitted: "2025-01-19",
  },
];

const ListingsPage: React.FC = () => {
  const [listings, setListings] = useState(initialListings);


  const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = statusFilter ? listing.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (title: string) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.title === title ? { ...listing, status: "Approved" } : listing
      )
    );
  };

  const handleReject = (title: string) => {
    setListings((prev) =>
      prev.map((listing) =>

        listing.title === title ? { ...listing, status: "Rejected" } : listing
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title >
        Listing Management
      </Title>
<Text c="dimmed" mb="md">
        Review and approve business listings
      </Text>

    <Group mb="md" justify="space-between">
        <TextInput
        
        placeholder="Search listings..."
          leftSection={<IconSearch size={16} />}
        
  value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
                radius="md"
          style={{ flex: 1, maxWidth: 400 }}
        />


        <Select
          placeholder="All Status"
          data={["Pending", "Approved", "Rejected"]}
          value={statusFilter}
          onChange={setStatusFilter}
          clearable
        
      radius="md"
          style={{ maxWidth: 150 }}
        />
      </Group>

      <Paper shadow="xs" p="md" radius="md" withBorder>
        <Table highlightOnHover withTableBorder verticalSpacing="sm">
          <Table.Thead>


            <Table.Tr>

              <Table.Th>Title</Table.Th>
              <Table.Th>Seller</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Location</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>
                Submitted</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {filteredListings.map((listing, i) => (
              <Table.Tr key={i}>
                <Table.Td fw={500}>{listing.title}</Table.Td>
             <Table.Td>
                {listing.seller}</Table.Td>
                <Table.Td c="green" fw={600}>
                  {listing.price}

        </Table.Td>
                <Table.Td>{listing.location}</Table.Td>
                <Table.Td>
                  <Group gap={4}>
                    {listing.status === "Pending" && (
                      <>
                        <IconClock size={16} color="gold" />
                  <Badge color="yellow" variant="light">
                          Pending
                        </Badge>
                      </>
                    )}
                    {listing.status === "Approved" && (
                      <>
           <IconCheck size={16} color="green" />
                        <Badge color="green" variant="light">
                          Approved
                        </Badge>
                      </>
                    )}
                    {listing.status === "Rejected" && (
                      <>
                        <IconX size={16} color="red" />
                        <Badge color="red" variant="light">
                          Rejected
                        </Badge>
                      </>
                    )}
                  </Group>
                   </Table.Td>
                <Table.Td>{listing.submitted}</Table.Td>
    <Table.Td>
                  {listing.status === "Pending" && (
                    <Group gap="xs">
                      <Button
                        color="green"
                        size="xs"
                        radius="md"
                        onClick={() => handleApprove(listing.title)}
                      >
                        Approve
                      </Button>
                      <Button
                             color="red"
                        size="xs"
                            variant="outline"
                        radius="md"
                        onClick={() => handleReject(listing.title)}
                      >
                        Reject
      </Button>
                    </Group>
                  )}

                  {listing.status === "Approved" && (
                    <Button size="xs" color="gray" disabled>
                      Approved
                    </Button>
                  )}

                  {listing.status === "Rejected" && (
                    <Button size="xs" color="gray" disabled>
                      Rejected
                    </Button>
                  )
                }
                </Table.Td>
              </Table.Tr>
           
           )
    )
}
          </Table.Tbody>
        </Table>
      </Paper>
    </div>
  );
};

export default ListingsPage;
