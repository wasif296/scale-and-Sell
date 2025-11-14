import React from "react";
import { Title, Text, Card, Grid, Group, SimpleGrid,  Badge, Paper } from "@mantine/core";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from "recharts";
import {
  IconUsers,
  IconBox,
  IconTrendingUp,
  IconAlertCircle,
} from "@tabler/icons-react";

const DashboardHome: React.FC = () => {
  const stats = [
    {
      title: "Total Users",value: "2,450",
icon: <IconUsers size={32} color="green" />,
    },
    {
      title: "Active Listings",
        value: "342",
    icon: <IconBox size={32} color="green" />,
    },
    {
      title: "Total Transactions",
      value: "1.2B",
      icon: <IconTrendingUp size={32} 
    color="green" />,
    },
    {
      title: "Pending Review",
      value: "28",
      icon: <IconAlertCircle size={32} color="green" />,
    },
     
        ];
        const data = [
  { name: "Jan", users: 100, transactions: 10, approvals: 20 },
  { name: "Feb", users: 150, transactions: 20, approvals: 30 },
  { name: "Mar", users: 200, transactions: 25, approvals: 40 },
  { name: "Apr", users: 300, transactions: 35, approvals: 50 },
  { name: "May", users: 400, transactions: 45, approvals: 65 },
  { name: "Jun", users: 500, transactions: 60, approvals: 75 },
];

  return (
    <div style={{ backgroundColor: "#f8fcf8", minHeight: "100vh", padding: "2rem" }}>
     
     
      <Title order={2}>Admin Dashboard</Title>

      <Text c="dimmed" mb="lg">
                System overview and management
      </Text>

      <Grid gutter="xl">
        {stats.map((stat) => (
 <Grid.Col key={stat.title} span={{ base: 12, sm: 6, md: 3 }}>
            <Card shadow="sm" radius="md" padding="lg" withBorder>
    <Group mb="sm">{stat.icon}</Group>
                 <Text c="dimmed" size="sm" fw={500}>
                {stat.title}
              </Text>
              <Title order={3}>{stat.value}</Title>
            </Card>

        
          </Grid.Col>
        ))}
      </Grid>
<Group grow mt={20}>
      <Card shadow="sm" padding="md" radius="md">
        <Title order={5} mb="sm">Platform Growth</Title>
        <ResponsiveContainer width="100%" height={250}>
    <LineChart
     data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
            dataKey="name" />
          <YAxis />
            <Tooltip />
       <Legend />
            <Line type="monotone" dataKey="users" stroke="green" name="New Users" />
                   <Line type="monotone" dataKey="transactions" stroke="darkgreen" name="Transactions" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card shadow="sm" padding="md" radius="md">
        <Title order={5} mb="sm">Approvals Trend</Title>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
     <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        <Legend />
            <Bar dataKey="approvals" fill="green" name="Listings Approved" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      </Group>
    <Paper mt={20} shadow="sm" p="lg" radius="md" withBorder>
      <Text fw={700} mb="md">
        System Status
      </Text>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing="md"
        style={{ marginTop: 10 }}
      >
        
        <Paper withBorder p="md" radius="md" shadow="xs">
   <Text 
   fw={500} mb={5}>
            API Health
          </Text>
          <Badge color="green" variant="light" radius="sm">
            Operational
          </Badge>
        </Paper>

        
        <Paper withBorder p="md" radius="md" shadow="xs">
          <Text fw={500} mb={5}>
            Database
      </Text>
          <Badge color="green" variant="light" radius="sm">
            Optimal
          </Badge>
        </Paper>

        <Paper withBorder p="md" radius="md" shadow="xs">
 <Text fw={500} mb={5}>
            Payment Gateway
          </Text>
          <Badge color="green" variant="light" radius="sm">
            Operational
     </Badge>
             </Paper>
      </SimpleGrid>  
    </Paper>

    </div>
  );
};

export default DashboardHome;
