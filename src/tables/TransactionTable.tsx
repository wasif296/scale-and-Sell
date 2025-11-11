import { Badge, Table,  } from '@mantine/core';

export const tableData= {
  head: ['income', 'expense'],
  body: [
    [1, 'Progressmate'],
      
  ],
};

export default function Demo() {
  return <Table data={tableData} />;
}