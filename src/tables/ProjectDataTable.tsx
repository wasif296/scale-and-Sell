import { Badge, Table,  } from '@mantine/core';

const tableData= {
  head: ['Serial Number', 'Project Name', 'Project Budget', 'Start Date', "End Date"],
  body: [
    [1, 'Progressmate', <Badge>1000</Badge>, 'Friday, 31 October 2025', "Friday, 31 October 2025"],
        [2, 'Progressmate', 1000, 'Friday, 31 October 2025', "Friday, 31 October 2025"],
    [3, 'Progressmate', 1000, 'Friday, 31 October 2025', "Friday, 31 October 2025"],
    [1, 'Progressmate', 1000, 'Friday, 31 October 2025', "Friday, 31 October 2025"],
    [1, 'Progressmate', 1000, 'Friday, 31 October 2025', "Friday, 31 October 2025"],

  ],
};

export default function Demo() {
  return <Table data={tableData} />;
}