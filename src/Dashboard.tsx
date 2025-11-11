
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

import {
  Group,Button,Stack,
  Title,
  Text,
  Badge,
  SimpleGrid,
  Card,
  Container,
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  
} from "@mantine/core";
import  {
  IconWallet,
  IconTrendingDown,
  IconTrendingUp,
 
} from "@tabler/icons-react";
import ProjectDataTable from "./tables/projectDataTable";



export default function DashboardLayout() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  return (
    <div >
   

      {/* first grid */}
      <Container size="lg" py="xl" >
        <Group justify="space-between" mb={20}>
          <Stack gap={0}>
                  <Title  order={2}>Progress Mate Dashboard</Title>
          <Text c="dimmed">Track your projects and manage funds efficiently</Text>
          </Stack>
        
       
   <Badge size="lg" color="blue">
          0 projects
        </Badge>

        </Group>
     
      <SimpleGrid  cols={3} spacing="md" >
        <Card  withBorder radius="md" p="md"  h={140}>
          <Group  justify="space-between">
             <Text fw={500}>Total Income</Text>
            <IconTrendingUp size={24} color="green" />
            </Group>
         

          <Group  justify="space-between" mt="sm">
            <Text  size="lg" fw={600}>
              $0
            </Text>
          </Group>
        </Card>

        <Card withBorder radius="md" p="md"  h={140}>
          <Group  justify="space-between"> <Text  fw={500}>Total Expenses</Text>
            <IconTrendingDown size={24} color="red" />
            </Group>
         
          <Group  justify="space-between" mt="sm">
            <Text  size="lg" fw={600}>
              $0
            </Text>
          </Group>
        </Card>

        <Card withBorder radius="md" p="md"  h={140}>
        <Group  justify="space-between">

          <Text  fw={500}>Balance</Text>
            <IconWallet size={24} color="teal" />
        </Group>


          <Group justify="space-between" mt="sm">
            <Text size="lg" fw={600}>
              $0
            </Text>
          </Group>
        </Card>
      </SimpleGrid>

      {/* second grid */}
      <SimpleGrid cols={2} spacing="md" mt="xl"  >
        <Card withBorder radius="md" p="md"  h={210}>
          <Text fw={500}>Financial Overview</Text>
        </Card>
        <Card withBorder radius="md" p="md"  h={210}>
          <Text fw={500}>Project Status</Text>
        </Card>
      </SimpleGrid>
      {/* second grid */}
      <SimpleGrid cols={2} spacing="md" mt="xl"  >
        <Card withBorder radius="md" p="md"  h={210}>
          <Text fw={500}>Expense Breakdown</Text>
        </Card>
        <Card withBorder radius="md" p="md"  h={210}>
          <Text fw={500}>Recent Transactions</Text>
        </Card>
      </SimpleGrid>
      {/* third grid */}
      <SimpleGrid cols={1} spacing="md" mt="xl"  >
        <Card withBorder radius="md" p="md"  mb="xl" h={400} >
          
        <Stack gap={0}>
          <Title order={2}>Projects</Title>
          </Stack>
          
        
        {/* Modal content */}
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
        <TextInput label="Project Name" placeholder="Enter Project Name" />

<Textarea
        label="Description"
        placeholder="Enter Project description"
      />
<NumberInput
      label="Amount"
      placeholder="$0.00"
    />
    <Group >
    <TextInput
      
      type='Date'

      label="Start Date"
      placeholder="Date input"
    />
    <TextInput
      
      type='Date'

      label="End Date"
      placeholder="Date input"
    />
</Group>
<Textarea
        label="Description"
        placeholder="Enter Project description"
      />
      <Group justify="flex-end"mt={30}>
        <Button variant="light" onClick={close}>Cancel</Button>
      <Button
  
  onClick={() => {
    
    alert("✅ New transaction has been added!");
    close(); 
  }}
>
  Add new project
</Button>
</Group>
      </Modal>

      <Button mx={"40%"} variant="filled"   onClick={open} mt={35}>
        + Add new project
      </Button>
  <ProjectDataTable/>
      
      

      </Card>
      </SimpleGrid>
      </Container>
      <Button mx={"40%"} variant="filled"   onClick={() => navigate("/transactions")}  mt={10}>
        Transaction
      </Button>
    </div>
  );
}
