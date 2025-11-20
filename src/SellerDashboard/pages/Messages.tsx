import { useState } from "react";
import {
  Card,
  Group,
  Stack,
  Text,
  ScrollArea,
  TextInput,
  ActionIcon,
  Box,
} from "@mantine/core";
import { IconSend } from "@tabler/icons-react";

export default function Message() {
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "them",
      text: "Hi, thanks for your interest in our platform!",
      time: "9:30 AM",
    },
    {
      sender: "you",
      text: "Great! Can you tell me more about your user base?",
      time: "9:32 AM",
    },
    {
      sender: "them",
      text: "We have 10,000+ active users with 500K monthly revenue",
      time: "9:35 AM",
    },
  ]);

  const sellers = [
    {
      name: "Ali Hassan (Seller)",
      subtitle: "E-commerce Platform",
      lastMsg: "Thanks for your interest! We can discuss terms.",
    },
    {
      name: "Zainab Ahmed (Seller)",
      subtitle: "Mobile App",
      lastMsg: "Our app has 5000+ active users",
      unread: 1,
    },
    {
      name: "Omar Khan (Seller)",
      subtitle: "SaaS Solution",
      lastMsg: "Revenue grew 40% last quarter",
      unread: 2,
    },
  ];

  const handleSend = () => {
    if (!message.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setChat((prev) => [
      ...prev,
      {
        sender: "you",
        text: message,
        time,
      },
    ]);

    setMessage("");
  };

  return (
    <Box p="md">
      <Stack mb="md">
        <Text size="xl" fw={700}>
          Message
        </Text>
      </Stack>

      <Group align="flex-start" grow>
        <Card w={280} radius="md" withBorder>
          <ScrollArea h="80vh">
            <Stack>
              {sellers.map((s, i) => (
                <Card
                  key={i}
                  p="sm"
                  radius="md"
                  withBorder={selected === i}
                  style={{
                    background: selected === i ? "#e9f5e9" : "white",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelected(i)}
                >
                  <Text fw={600}>{s.name}</Text>
                  <Text size="sm" c="dimmed">
                    {s.subtitle}
                  </Text>
                  <Group justify="space-between" mt={4}>
                    <Text size="xs" c="dimmed">
                      {s.lastMsg}
                    </Text>
                    {s.unread && (
                      <Card
                        radius="xl"
                        p="4px 8px"
                        style={{
                          background: "green",
                          color: "white",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {s.unread}
                      </Card>
                    )}
                  </Group>
                </Card>
              ))}
            </Stack>
          </ScrollArea>
        </Card>

        <Card radius="md" withBorder style={{ flex: 1 }}>
          <Stack h="80vh" justify="space-between">
            <ScrollArea h="100%">
              <Stack p="md">
                {chat.map((m, i) => (
                  <div
                    key={i}
                    style={{ textAlign: m.sender === "you" ? "right" : "left" }}
                  >
                    <Card
                      radius="md"
                      p="sm"
                      style={{
                        display: "inline-block",
                        background: m.sender === "you" ? "green" : "#f3f3f3",
                        color: m.sender === "you" ? "white" : "black",
                        maxWidth: "60%",
                      }}
                    >
                      <Text>{m.text}</Text>
                    </Card>
                    <Text size="xs" c="dimmed" mt={4}>
                      {m.time}
                    </Text>
                  </div>
                ))}
              </Stack>
            </ScrollArea>

            <Group p="md">
              <TextInput
                placeholder="Type your message..."
                radius="md"
                style={{ flex: 1 }}
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <ActionIcon
                variant="filled"
                color="green"
                radius="md"
                size={45}
                onClick={handleSend}
              >
                <IconSend size={22} />
              </ActionIcon>
            </Group>
          </Stack>
        </Card>
      </Group>
    </Box>
  );
}
