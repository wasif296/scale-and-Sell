
import '@mantine/core/styles.css';
import   { ColorSchemeScript, createTheme, MantineProvider,} from '@mantine/core';
import DashboardLayout from './Dashboard';
import Transactions from './Transactions';
import  { Routes, Route } from 'react-router-dom';
import NavigationBarLayout from './layouts/NavigationBarLayout';

function App() {
   return (
<>
      <ColorSchemeScript defaultColorScheme="dark" />
<MantineProvider defaultColorScheme="dark"
         >
 <Routes>
  <Route path='/' element={<NavigationBarLayout/>}>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
    </MantineProvider>
</>

  );

}

export default App
