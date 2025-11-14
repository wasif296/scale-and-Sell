import { Text, Button, Group, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const AuthLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header mx={30} my={10}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group grow>
            <Text   fw={700}>Scale & Sell</Text>
            <Group justify="flex-end">
              <Button variant="subtle" color="#006200">
                Login
              </Button>
              <Button color="#006200">Register</Button>
            </Group>
          </Group>
        </AppShell.Header>
      </AppShell>

      <Stack>
        <Outlet />
      </Stack>
    </>
  );
};

export default AuthLayout;
