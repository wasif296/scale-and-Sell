import { Card, Text, Group, Badge, Button, Divider } from "@mantine/core";
import { IconEye, IconDownload } from "@tabler/icons-react";

interface ContractItem {
  title: string;
  buyer: string;
  business: string;
  amount: string;
  date: string;
  status: "Signed" | "Draft";
}

export default function DigitalContracts() {
  const contracts: ContractItem[] = [
    {
      title: "Purchase Agreement",
      buyer: "Ahmed Khan",
      business: "E-commerce Platform",
      amount: "PKR 5,000,000",
      date: "2025-01-15",
      status: "Signed",
    },
    {
      title: "Investment Agreement",
      buyer: "Fatima Ali",
      business: "Mobile App",
      amount: "PKR 2,000,000",
      date: "2025-01-20",
      status: "Draft",
    },
  ];

  const statusColor: Record<ContractItem["status"], string> = {
    Signed: "green",
    Draft: "yellow",
  };

  return (
    <div className="w-full p-6 bg-[#F4F9F4] min-h-screen">
      <Text size="xl" fw={700} mb={-4}>
        Digital Contracts
      </Text>
      <Text mb={20} c="dimmed">
        Manage your business contracts with e-signatures
      </Text>

      {contracts.map((item, i) => (
        <Card
          key={i}
          shadow="xs"
          radius="md"
          padding="lg"
          className="border border-gray-200 bg-white"
          mb={25}
        >
          {/* Title + Status */}
          <Group justify="space-between" mb={10}>
            <Text fw={700} size="lg">
              {item.title}
            </Text>
            <Badge color={statusColor[item.status]} variant="light">
              {item.status}
            </Badge>
          </Group>

          <Divider mb={15} />

          {/* Content Layout */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Text fw={600} mb={6}>
                Buyer: {item.buyer}
              </Text>
              <Text fw={600}>Amount: {item.amount}</Text>
            </div>

            <div>
              <Text mb={6}>Business: {item.business}</Text>
              <Text>Created: {item.date}</Text>
            </div>
          </div>

          {/* Buttons */}
          <Group mt={20}>
            <Button variant="default" leftSection={<IconEye size={18} />}>
              Preview
            </Button>
            <Button color="green" leftSection={<IconDownload size={18} />}>
              Download PDF
            </Button>
          </Group>
        </Card>
      ))}
    </div>
  );
}
