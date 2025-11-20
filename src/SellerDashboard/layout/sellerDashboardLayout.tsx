// src/SellerDashboard/layout/SellerDashboardLayout.tsx
import React, { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  AppShell,
  Stack,
  NavLink,
  Group,
  Text,
  ThemeIcon,
  ActionIcon,
  Button,
  Burger,
} from "@mantine/core";
import {
  IconDashboard,
  IconBell,
  IconLogout,
  IconSearch,
  IconMessage,
  IconBriefcase,
} from "@tabler/icons-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

type MenuItem = {
  label: string;
  icon: ReactNode;
  path: string;
};

const navigation: MenuItem[] = [
  { label: "Dashboard", icon: <IconDashboard size={16} />, path: "/seller" },
  {
    label: "My Listings",
    icon: <IconBriefcase size={16} />,
    path: "/seller/mylistings",
  },
  {
    label: "Messages",
    icon: <IconMessage size={16} />,
    path: "/seller/messages",
  },
  { label: "Escrow", icon: <IconSearch size={16} />, path: "/seller/escrow" },
  {
    label: "Contracts",
    icon: <IconBell size={16} />,
    path: "/seller/contracts",
  },
];

export default function SellerDashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [search] = useState("");

  const filteredNavigation = useMemo(() => {
    if (!search.trim()) return navigation;
    const q = search.trim().toLowerCase();
    return navigation.filter((item) => item.label.toLowerCase().includes(q));
  }, [search]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/LandingPage");
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      styles={{ main: { backgroundColor: "#f8f9fa" } }}
    >
      <AppShell.Navbar
        p="md"
        style={{
          backgroundColor: "#004d00",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack gap="xs" style={{ flexGrow: 1, marginTop: "20px" }}>
          {filteredNavigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.label}
                component={Link}
                to={item.path}
                label={item.label}
                leftSection={
                  <ThemeIcon
                    color={isActive ? "green.9" : "white"}
                    variant="light"
                    size="lg"
                    radius="md"
                    style={{
                      backgroundColor: isActive ? "white" : "transparent",
                    }}
                  >
                    {item.icon}
                  </ThemeIcon>
                }
                active={isActive}
                styles={{
                  root: {
                    color: isActive ? "#004d00" : "#fff",
                    backgroundColor: isActive ? "#fff" : "transparent",
                    borderRadius: "8px",
                    fontWeight: isActive ? 700 : 500,
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    "&:hover": { backgroundColor: "#ffffff", color: "#004d00" },
                  },
                  label: { fontSize: "14px", fontWeight: 600 },
                }}
              />
            );
          })}
        </Stack>

        <Button
          fullWidth
          variant="light"
          color="red"
          leftSection={<IconLogout size={18} />}
          radius="md"
          onClick={handleLogout}
          styles={{
            root: {
              backgroundColor: "transparent",
              color: "white",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#ffffff", color: "#d32f2f" },
            },
          }}
        >
          Logout
        </Button>
      </AppShell.Navbar>

      <AppShell.Header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <Group>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="sm"
            size="sm"
          />
          <Text fw={700} size="lg" c="green.9">
            Scale&Sell
          </Text>
        </Group>

        <Group gap="xs">
          <ActionIcon variant="subtle" color="green">
            <IconBell size={18} />
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
