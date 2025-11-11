import { AppShell, Burger, Group, NavLink, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {  Outlet } from 'react-router-dom';

function Demo() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />

<Group align='center' h='60' >
  <Title c={"blue"}>ProgressMate</Title>

     <NavLink
        href="/"
        label="Dashboard"
      w={100}
        active
      />
           <NavLink
        href="/transactions"
        label="Transactions"
      w={100}
        active
      />
    </Group>
        
      </AppShell.Header>


      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  );
}

export default Demo;