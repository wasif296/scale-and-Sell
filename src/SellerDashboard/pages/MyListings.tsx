import {
  Box,
  Text,
  Table,
  Badge,
  ActionIcon,
  Group,
  Button,
  Card,
  Modal,
  TextInput,
  Textarea,
  Select,
  Radio,
} from "@mantine/core";
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconCircleCheck,
  IconClock,
} from "@tabler/icons-react";
import { useState } from "react";

// Type for listing item
type ListingItem = {
  id: number;
  title: string;
  subtitle: string;
  city: string;
  price: number;
  status: "Approved" | "Pending";
};

// Type for form data
type ListingFormData = {
  title: string;
  subtitle: string;
  city: string;
  price: string; // string for input binding
};

export default function MyListings() {
  const [listings, setListings] = useState<ListingItem[]>([
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "Fully operational e-commerce platform",
      city: "Karachi",
      price: 5_000_000,
      status: "Approved",
    },
    {
      id: 2,
      title: "Mobile App",
      subtitle: "iOS/Android fitness tracking app",
      city: "Lahore",
      price: 2_000_000,
      status: "Pending",
    },
  ]);

  const [modalOpened, setModalOpened] = useState(false);
  const [listingType, setListingType] = useState<"sale" | "investment" | null>(
    null
  );

  const [formData, setFormData] = useState<ListingFormData>({
    title: "",
    subtitle: "",
    city: "",
    price: "",
  });

  // Delete handler
  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this listing?"))
      return;
    setListings((prev) => prev.filter((item) => item.id !== id));
  };

  const renderStatus = (status: ListingItem["status"]) => {
    if (status === "Approved")
      return (
        <Group gap={6}>
          <IconCircleCheck size={14} color="green" />
          <Badge color="green" variant="light" radius="sm">
            Approved
          </Badge>
        </Group>
      );

    return (
      <Group gap={6}>
        <IconClock size={14} color="orange" />
        <Badge color="yellow" variant="light" radius="sm">
          Pending
        </Badge>
      </Group>
    );
  };

  const handleCloseModal = () => {
    setListingType(null);
    setFormData({ title: "", subtitle: "", city: "", price: "" });
    setModalOpened(false);
  };

  const handleCreateListing = () => {
    if (!formData.title || !formData.city) {
      alert("Please fill in title and city");
      return;
    }

    const newListing: ListingItem = {
      id: listings.length ? listings[listings.length - 1].id + 1 : 1,
      title: formData.title,
      subtitle:
        listingType === "sale" ? formData.subtitle : "Investment Opportunity",
      city: formData.city,
      price: parseInt(formData.price) || 0,
      status: "Pending",
    };

    setListings((prev) => [...prev, newListing]);
    handleCloseModal();
  };

  return (
    <Box bg="#F4FAF4" p="lg" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Group justify="space-between" mb="md">
        <Box>
          <Text fw={700} fz={24}>
            My Listings
          </Text>
          <Text fz={12} c="dimmed">
            Manage your business listings
          </Text>
        </Box>

        <Button
          leftSection={<IconPlus size={16} />}
          radius="sm"
          style={{ background: "#0B5C0B" }}
          onClick={() => setModalOpened(true)}
        >
          New Listing
        </Button>
      </Group>

      {/* Listings Table */}
      <Card withBorder radius="md" p={0}>
        <Table highlightOnHover verticalSpacing="md" withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Title</Table.Th>
              <Table.Th>City</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {listings.map((item) => (
              <Table.Tr key={item.id}>
                <Table.Td>
                  <Text fw={600}>{item.title}</Text>
                  <Text fz={11} c="dimmed">
                    {item.subtitle}
                  </Text>
                </Table.Td>
                <Table.Td>{item.city}</Table.Td>
                <Table.Td fw={700} c="green">
                  {item.price.toLocaleString()} PKR
                </Table.Td>
                <Table.Td>{renderStatus(item.status)}</Table.Td>
                <Table.Td>
                  <Group gap={8}>
                    <ActionIcon variant="subtle" color="green">
                      <IconPencil size={16} />
                    </ActionIcon>
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      onClick={() => handleDelete(item.id)}
                    >
                      <IconTrash size={16} />
                    </ActionIcon>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>

      {/* Modal */}
      <Modal
        opened={modalOpened}
        onClose={handleCloseModal}
        title="Create New Listing"
        size="xl"
        overlayProps={{ opacity: 0.2 }}
      >
        {/* STEP 1: Choose Listing Type */}
        {!listingType && (
          <Card p="lg" radius="md" withBorder>
            <Radio.Group
              label="Select Listing Type"
              size="md"
              value={listingType}
              onChange={(value) =>
                setListingType(value as "sale" | "investment")
              }
            >
              <Group mt="md">
                <Radio
                  value="sale"
                  label="Business for Sale"
                  description="List your business for full or partial takeover"
                />
                <Radio
                  value="investment"
                  label="Investment Opportunity"
                  description="Invite investors to invest in your business"
                />
              </Group>
            </Radio.Group>
          </Card>
        )}

        {/* STEP 2: Sale Form */}
        {listingType === "sale" && (
          <Card p="lg" mt="md" radius="md" withBorder>
            <TextInput
              label="Business Title"
              placeholder="Your business name"
              mb="md"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.currentTarget.value })
              }
            />
            <Select
              label="City"
              placeholder="Select city"
              data={[
                "Karachi",
                "Lahore",
                "Islamabad",
                "Rawalpindi",
                "Peshawar",
              ]}
              mb="md"
              value={formData.city}
              onChange={(value) =>
                setFormData({ ...formData, city: value || "" })
              }
            />
            <Textarea
              label="Description"
              placeholder="Describe your business..."
              autosize
              minRows={4}
              mb="md"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.currentTarget.value })
              }
            />
            <TextInput
              label="Price (PKR)"
              placeholder="5000000"
              mb="md"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.currentTarget.value })
              }
            />

            <Group justify="flex-end" mt="md">
              <Button variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button color="green" onClick={handleCreateListing}>
                Create Listing
              </Button>
            </Group>
          </Card>
        )}

        {/* STEP 2: Investment Form */}
        {listingType === "investment" && (
          <Card p="lg" mt="md" radius="md" withBorder>
            <TextInput
              label="Investment Title"
              placeholder="Investment opportunity title"
              mb="md"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.currentTarget.value })
              }
            />
            <Select
              label="City"
              placeholder="Select city"
              data={[
                "Karachi",
                "Lahore",
                "Islamabad",
                "Rawalpindi",
                "Peshawar",
              ]}
              mb="md"
              value={formData.city}
              onChange={(value) =>
                setFormData({ ...formData, city: value || "" })
              }
            />
            <Textarea
              label="Business Overview"
              placeholder="Describe your business and the investment opportunity..."
              autosize
              minRows={4}
              mb="md"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.currentTarget.value })
              }
            />
            <TextInput
              label="Minimum Investment (PKR)"
              placeholder="300000"
              mb="md"
            />
            <TextInput
              label="Equity Offered (%)"
              placeholder="Example: 20%"
              mb="md"
            />

            <Group justify="flex-end" mt="md">
              <Button variant="outline" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button color="green" onClick={handleCreateListing}>
                Create Investment Gig
              </Button>
            </Group>
          </Card>
        )}
      </Modal>
    </Box>
  );
}
