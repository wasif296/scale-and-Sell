import {
  Box,
  Card,
  Grid,
  Group,
  Stack,
  Text,
  Badge,
  Table,
  Divider,
} from "@mantine/core";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import {
  IconCurrencyRupee,
  IconTrendingUp,
  IconWallet,
} from "@tabler/icons-react";

export default function Portfolio() {
  const summaryData = [
    {
      label: "Total Invested",
      value: 12000000,
      icon: <IconWallet size={28} />,
      color: "dark",
    },

    {
      label: "Current Value",
      value: 14220000,
      icon: <IconCurrencyRupee size={28} />,
      color: "dark",
    },

    {
      label: "Total Gain",
      value: 2220000,
      icon: <IconTrendingUp size={28} />,
      color: "green",
    },
    {
      label: "Gain %",
      value: 18.5,
      icon: <IconTrendingUp size={28} />,
      color: "green",
      suffix: "%",
    },
  ];

  const distributionData = [
    { name: "E-commerce Platform", value: 41 },
    { name: "Mobile App", value: 24 },
    { name: "SaaS Solution", value: 35 },
  ];
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  const performanceSummary = [
    {
      name: "E-commerce Platform",
      invested: 5000000,
      current: 5850000,
      percent: 17,
    },
    { name: "Mobile App", invested: 3000000, current: 3450000, percent: 15 },
    { name: "SaaS Solution", invested: 4000000, current: 4920000, percent: 23 },
  ];

  return (
    <Box p="md">
      <Stack gap={2} mb="lg">
        <Text size="xl" fw={700}>
          Investment Portfolio
        </Text>

        <Text size="sm" c="dimmed">
          Track your startup investments and returns
        </Text>
      </Stack>

      <Grid mb="lg" gutter="md">
        {summaryData.map((item, i) => (
          <Grid.Col span={3} key={i}>
            <Card shadow="sm" radius="md" p="md" h="100%" withBorder>
              <Group gap="sm">
                {item.icon}
                <Stack gap={1}>
                  <Text size="sm" c="dimmed">
                    {item.label}
                  </Text>
                  <Text size="lg" fw={700} c={item.color}>
                    {item.value.toLocaleString()}
                    {item.suffix ?? ""}
                  </Text>
                </Stack>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Grid mb="lg" gutter="md">
        <Grid.Col span={6}>
          <Card shadow="sm" p="md" radius="md" h="100%" withBorder>
            <Text fw={700} mb="sm">
              {" "}
              Portfolio Distribution
            </Text>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={distributionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {distributionData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <Stack gap={2} mt="sm">
              {distributionData.map((d, i) => (
                <Group key={i} gap={4}>
                  <Text size="sm" style={{ color: COLORS[i] }}>
                    ●
                  </Text>
                  <Text size="sm" c="dimmed">
                    {d.name} ({d.value}%)
                  </Text>
                </Group>
              ))}
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={6}>
          <Card shadow="sm" radius="lg" withBorder p="lg">
            <Text fw={600} size="lg" mb="md">
              Performance Summary
            </Text>
            <Stack gap="sm">
              {performanceSummary.map((p, i) => (
                <div key={i}>
                  <Group justify="space-between" align="flex-start" gap={4}>
                    <Stack gap={1}>
                      <Text fw={600}>{p.name}</Text>
                      <Text size="xs" c="dimmed">
                        Invested: PKR {(p.invested / 1000000).toFixed(1)}M
                      </Text>
                    </Stack>

                    <Stack align="flex-end" gap={1}>
                      <Text size="xs" c="dimmed">
                        Current: PKR {(p.current / 1000000).toFixed(2)}M
                      </Text>
                      <Text size="xs" c="green">
                        ↗ +{p.percent}%
                      </Text>
                    </Stack>
                  </Group>

                  {i < performanceSummary.length - 1 && <Divider my="sm" />}
                </div>
              ))}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>

      <Card shadow="sm" radius="lg" withBorder p="lg">
        <Text fw={600} size="lg" mb="md">
          Investment Details
        </Text>

        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Investment</th>
              <th>Amount Invested</th>
              <th>Current Value</th>
              <th>Gain/Loss</th>
              <th>Performance</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {performanceSummary.map((p, i) => {
              const gain = p.current - p.invested;
              const isGain = gain >= 0;
              return (
                <tr key={i}>
                  <td>
                    <Text fw={600}>{p.name}</Text>
                  </td>
                  <td>PKR {(p.invested / 1000000).toFixed(1)}M</td>
                  <td>
                    <Text c={isGain ? "green" : "red"}>
                      PKR {(p.current / 1000000).toFixed(2)}M
                    </Text>
                  </td>
                  <td>
                    <Text c={isGain ? "green" : "red"} fw={600}>
                      PKR {(gain / 1000000).toFixed(2)}M
                    </Text>
                  </td>
                  <td>
                    <Text c={isGain ? "green" : "red"} fw={600}>
                      ↗ +{p.percent}%
                    </Text>
                  </td>
                  <td>
                    <Badge
                      color={p.percent > 15 ? "green" : "yellow"}
                      variant="light"
                    >
                      {p.percent > 15 ? "Growing" : "Stable"}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </Box>
  );
}
