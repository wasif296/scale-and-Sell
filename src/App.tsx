

import '@mantine/core/styles.css'
import { Button, Center, createTheme, MantineProvider, Stack, Title , Text, Badge, Group, SimpleGrid, Card, Paper } from '@mantine/core'
import { Label } from 'recharts';

function App() {
  
  const theme = createTheme({
  /** Put your mantine theme override here */
});

  return (
    <MantineProvider theme={theme}>

<Paper w={"80%"} mx={"10%"}  style={{border: "1px solid black"}} bg={"rgb(36,36,36)"} >

<Stack c={"white"} >

<Group justify='space-between'> 
  <Title> FundFlow Dashboard</Title>
<Badge>0 projects</Badge>
</Group>
<Text> Track your projects and manage funds efficiently </Text>

</Stack >


<SimpleGrid c={"rgb(36,36,36)"} cols={3} mt={"1%"} >

<Card withBorder>TOTAL INCOME</Card>
<Card withBorder>TOTAL EXPENSE</Card>
<Card withBorder>BALANCE</Card>

</SimpleGrid>

<Group >

<SimpleGrid bg={"blue"} cols={1}  mt={"1%"} w="66.5%" h={"300"}  >

<Card withBorder w={"100%"} h={"100%"}>Financial Overview</Card>

</SimpleGrid>

<SimpleGrid bg={"blue"} cols={1}  mt={"1%"} w="32.7%" h={"300"} >

<Card withBorder w={"100%"} h={"100%"}>Project Status</Card>

</SimpleGrid>

</Group>

<Group >

<SimpleGrid bg={"blue"} cols={1}  mt={"1%"} w="50%" h={"300"}  >

<Card withBorder w={"100%"} h={"100%"}>Expense Breakdown</Card>

</SimpleGrid>

<SimpleGrid bg={"blue"} cols={1}  mt={"1%"} w="49.2%" h={"300"} >

<Card withBorder w={"100%"} h={"100%"}>Recent Transactions</Card>

</SimpleGrid>

</Group>  


<SimpleGrid bg={"blue"} cols={1}  mt={"1%"} w="100%" h={"300"} >

<Card withBorder w={"100%"} h={"100%"}>

<Group justify='space-between'>
    <Text>Projects</Text>
    <Button>+ Add Project </Button>
</Group>

<Center mt={"7%"}>

<Button w={"10%"}>+ Create Project</Button>
</Center>
</Card>

</SimpleGrid>

</Paper>

    

    </MantineProvider>
  );
}


export default App
