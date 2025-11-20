import React, { useState, type JSX } from "react";
import {
  Text,
  TextInput,
  Grid,
  Card,
  Image,
  Group,
  Badge,
  Button,
  Divider,
  Modal,
  ScrollArea,
  Box,
  Stack,
  Avatar,
} from "@mantine/core";
import { IconSearch, IconMessage, IconMail } from "@tabler/icons-react";

type Startup = {
  id: number;
  title: string;
  description: string;
  revenue: string;
  team: string;
  valuation: string;
  category: string;
  image: string | null;
  sellerName: string;
  sellerAvatar?: string | null;
};

type Message = {
  id: string;
  text: string;
  sender: "investor" | "seller";
  timestamp: string;
};

export default function Explore(): JSX.Element {
  const startups: Startup[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Fully operational e-commerce platform with 10k+ users and growing monthly revenue.",
      revenue: "PKR 1.2M",
      team: "5 people",
      valuation: "5.0M",
      category: "E-commerce",
      image: null,
      sellerName: "Ali Hassan",
      sellerAvatar: null,
    },
    {
      id: 2,
      title: "Fintech App",
      description:
        "Mobile banking app providing secure, instant payments and micro-loans.",
      revenue: "PKR 800k",
      team: "3 people",
      valuation: "3.0M",
      category: "Fintech",
      image: null,
      sellerName: "Fatima Ahmed",
      sellerAvatar: null,
    },
    {
      id: 3,
      title: "SaaS Solution",
      description:
        "B2B SaaS tool for small businesses to manage inventory, invoices and analytics.",
      revenue: "PKR 1.8M",
      team: "6 people",
      valuation: "7.0M",
      category: "SaaS",
      image: null,
      sellerName: "Mohammad Khan",
      sellerAvatar: null,
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [chattingStartup, setChattingStartup] = useState<Startup | null>(null);
  const [messageModalOpen, setMessageModalOpen] = useState(false);

  const [messagesByStartup, setMessagesByStartup] = useState<
    Record<number, Message[]>
  >({
    1: [
      {
        id: "m1",
        text: "Hi — I'm interested in learning more about your traction.",
        sender: "investor",
        timestamp: new Date().toISOString(),
      },
    ],
  });

  const [newMessageText, setNewMessageText] = useState("");

  const filtered = startups.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  function openDetails(s: Startup) {
    setSelectedStartup(s);
  }

  function openChat(s: Startup) {
    setChattingStartup(s);
    setMessageModalOpen(true);
  }

  function sendMessage() {
    if (!chattingStartup || !newMessageText.trim()) return;

    const msg: Message = {
      id: `${chattingStartup.id}_${Date.now()}`,
      text: newMessageText.trim(),
      sender: "investor",
      timestamp: new Date().toISOString(),
    };

    setMessagesByStartup((prev) => ({
      ...prev,
      [chattingStartup.id]: [...(prev[chattingStartup.id] ?? []), msg],
    }));

    setNewMessageText("");
  }

  function simulateSellerReply() {
    if (!chattingStartup) return;

    const reply: Message = {
      id: `${chattingStartup.id}_seller_${Date.now()}`,
      text: "Thanks for your interest! I'll share the pitch deck shortly.",
      sender: "seller",
      timestamp: new Date().toISOString(),
    };

    setMessagesByStartup((prev) => ({
      ...prev,
      [chattingStartup.id]: [...(prev[chattingStartup.id] ?? []), reply],
    }));
  }

  return (
    <Box p="md">
      <Stack gap="xs">
        <Text size="xl" fw={700}>
          Explore Startups
        </Text>
        <Text c="dimmed" size="sm">
          Browse investment-ready opportunities — search, view details, and
          message sellers.
        </Text>

        <TextInput
          placeholder="Search startups..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          radius="md"
          size="md"
          leftSection={<IconSearch size={18} />}
          style={{ maxWidth: 480 }}
        />
      </Stack>

      <Divider my="md" />

      <Grid gutter="md">
        {filtered.map((s) => (
          <Grid.Col key={s.id} span={{ base: 12, sm: 6, lg: 4 }}>
            <Card shadow="sm" radius="md" withBorder>
              <Card.Section>
                <Box
                  style={{
                    height: 220,
                    background: "#f1f1f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={s.image ?? ""}
                    alt={s.title}
                    height={80}
                    maw={160}
                    style={{ opacity: 0.2 }}
                  />
                </Box>
              </Card.Section>

              <Group justify="space-between" mt="sm" mb="xs">
                <div>
                  <Text fw={700}>{s.title}</Text>
                  <Text size="xs" c="dimmed">
                    {s.category}
                  </Text>
                </div>

                <Badge color="green" variant="light">
                  {s.valuation}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed" lineClamp={3}>
                {s.description}
              </Text>

              <Group justify="space-between" mt="md">
                <Group gap="xs">
                  <IconMail size={16} />
                  <Text size="xs">Revenue: {s.revenue}</Text>
                </Group>

                <Text size="xs">Team: {s.team}</Text>
              </Group>

              <Divider my="sm" />

              <Group grow>
                <Button
                  color="green"
                  radius="md"
                  onClick={() => openDetails(s)}
                >
                  View Details
                </Button>

                <Button
                  variant="outline"
                  radius="md"
                  onClick={() => openChat(s)}
                  leftSection={<IconMessage size={16} />}
                >
                  Contact
                </Button>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={!!selectedStartup}
        onClose={() => setSelectedStartup(null)}
        title={selectedStartup?.title}
        size="lg"
        centered
      >
        {selectedStartup && (
          <ScrollArea h={360}>
            <Stack gap="sm">
              <Group justify="space-between">
                <Group>
                  <Avatar
                    src={selectedStartup.sellerAvatar ?? undefined}
                    radius="xl"
                  />
                  <div>
                    <Text fw={700}>{selectedStartup.sellerName}</Text>
                    <Text size="xs" c="dimmed">
                      Seller
                    </Text>
                  </div>
                </Group>

                <Badge variant="light" color="green">
                  {selectedStartup.category}
                </Badge>
              </Group>

              <Divider />

              <Text size="sm">{selectedStartup.description}</Text>

              <Group justify="space-between">
                <Text size="sm">Revenue: {selectedStartup.revenue}</Text>
                <Text size="sm">Team: {selectedStartup.team}</Text>
              </Group>

              <Text size="sm">Valuation: {selectedStartup.valuation}</Text>

              <Divider />

              <Group justify="right">
                <Button
                  color="green"
                  onClick={() => {
                    openChat(selectedStartup);
                    setSelectedStartup(null);
                  }}
                >
                  Contact Seller
                </Button>
              </Group>
            </Stack>
          </ScrollArea>
        )}
      </Modal>

      <Modal
        opened={messageModalOpen}
        onClose={() => setMessageModalOpen(false)}
        title={`Message ${chattingStartup?.sellerName ?? ""}`}
        size="md"
        centered
      >
        <Stack gap="sm">
          <ScrollArea h={260}>
            <Stack>
              {(messagesByStartup[chattingStartup?.id ?? -1] ?? []).map((m) => (
                <Group
                  key={m.id}
                  justify={m.sender === "investor" ? "flex-end" : "flex-start"}
                >
                  <Box
                    style={{
                      background:
                        m.sender === "investor" ? "#34a853" : "#eaeaea",
                      color: m.sender === "investor" ? "white" : "black",
                      padding: "8px 12px",
                      borderRadius: 8,
                      maxWidth: "75%",
                      fontSize: 14,
                    }}
                  >
                    <Text size="sm">{m.text}</Text>
                    <Text size="xs" c="dimmed" mt={6}>
                      {new Date(m.timestamp).toLocaleString()}
                    </Text>
                  </Box>
                </Group>
              ))}
            </Stack>
          </ScrollArea>

          <Group align="end" gap="sm">
            <TextInput
              placeholder="Write a message..."
              value={newMessageText}
              onChange={(e) => setNewMessageText(e.currentTarget.value)}
              flex={1}
            />

            <Button color="green" onClick={sendMessage}>
              Send
            </Button>

            <Button variant="outline" onClick={simulateSellerReply}>
              Reply
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Box>
  );
}
