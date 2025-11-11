

import { useDisclosure } from "@mantine/hooks";


import {
  Group,Button,Stack,
  Title,
  Text,
Badge,
  Card,
  Container,
  Modal,
  TextInput,
  Select,
  NumberInput,
  Textarea,
  Table,
} from "@mantine/core";
import TransactionTable from "./tables/TransactionTable";
import { useState } from "react";

export default function Transactions() {
  const [opened, { open, close }] = useDisclosure(false);
  const [project, setProject] = useState("")


const wasif = [
  {id: 1,  Date: 12545, projectName: "asd" , Type: "Expense", Category: "other", 	Description: "asd", Amount : 12 , Action: "-"},
  {id : 2 , Date: 124545, projectName: "asdd" , Type: "Exptense", Category: "othter", 	Description: "astd", Amount : 12 , Action: "-"},

];


  return (
    <div>
    <Container  size="lg" py="xl">
    <Group justify="space-between"  mb="xl" >
        <Stack gap={0}>
          <Title  order={2}>Progress Mate Tracking</Title>
          <Text >Manage income and expenses for your projects</Text>
        </Stack>
        
       
       
      </Group>

        <Card  withBorder radius="md" p="md"  h={500}>
         <Group  justify="space-between" mb={20}> <Title order={2}>Transactions</Title>
               <Button   variant="filled"   onClick={open} >
        + Add Transaction
      </Button>
          </Group>
         
         <Group align="center">
 <TextInput

 w={500}
          size="md"
          radius="md"
          placeholder="Search transactions"
        />
        <Select
        size="md"
          radius="md"

      placeholder="Filter by project"
      data={['All types']}
    />
    <Select
        size="md"
          radius="md"

      placeholder="Filter by type"
      data={['All types', 'income', ' Expense']}
    />

         </Group>
         
        <Modal opened={opened} onClose={close} title="Add New Transactions" centered>
        {/* Modal content */}
        <Select
      label="Select Project"
      placeholder="Pick value"
      data={['React']}
        onChange={(e)=>{
          if(!e) return {message: "please select somthing"}
        {setProject}

      }}
    />
    <Select
      label="Transaction Type"
      placeholder="Pick value"
      data={['income', 'expense']}
    />
    <Select
      label="Category"
      placeholder="Pick value"
      data={['Salries', 'luxury', 'savings']}
    
    />
     <NumberInput
      label="Amount"
      placeholder="$0.00"
    />
    <TextInput
      
      type='Date'
     
      label="Date"
      placeholder="Date input"
    />
     <Textarea
        label="Description"
        placeholder="Transaction description"
      />
      <Group justify="flex-end"mt={30}>
        <Button variant="light" onClick={close}>Cancel</Button>
      <Button bg={"blue"} variant="filled"  onClick={() => {
    if (!Select || !NumberInput || !TextInput || !Textarea) {
      alert("bkl pura data dal")
    }
    else{
    alert("✅ New transaction has been added!");
    }
    close(); 
  }}>
        Add Transaction
      </Button>
      </Group>

      </Modal>


      <Table withRowBorders withColumnBorders highlightOnHover mt={20}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>projectName</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Amount</Table.Th>
          <Table.Th>Action</Table.Th>
          
        </Table.Tr>
      </Table.Thead>
      
      <Table.Tbody>
    {wasif.map((row) => (
          <Table.Tr key={row.id}>
            <Table.Td>{row.Date}</Table.Td>
            <Table.Td>{row.projectName}</Table.Td>
            <Table.Td><Badge bg={"red"}>{row.Type}</Badge></Table.Td>
            <Table.Td>{row.Category}</Table.Td>
            <Table.Td>{row.Description}</Table.Td>
            <Table.Td>{row.Amount}</Table.Td>
            <Table.Td>{row.Action}</Table.Td>
          </Table.Tr>
  ))}
      </Table.Tbody>
    </Table>
        </Card>
      
    </Container>
    </div>
  );
}
