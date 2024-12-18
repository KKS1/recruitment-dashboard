import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { Hires } from '@/components/dashboard/overview/hires';
import { LatestHires } from '@/components/dashboard/overview/latest-hires';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalApplicants } from '@/components/dashboard/overview/total-applicants';
import { TotalRoles } from '@/components/dashboard/overview/total-roles';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { TrendFilter } from '@/components/dashboard/overview/trend-filter';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={12} sm={12} xs={12}>
        {' '}
        <TrendFilter />
      </Grid>

      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={7} trend="down" sx={{ height: '100%' }} value="15 days" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalApplicants diff={16} trend="up" sx={{ height: '100%' }} value="450" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={68.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalRoles sx={{ height: '100%' }} value="152" />
      </Grid>
      <Grid lg={8} xs={12}>
        <Hires
          chartSeries={[
            { name: 'This year', data: [180, 160, 50, 80, 30, 140, 130, 160, 170, 190, 180, 200] },
            { name: 'Last year', data: [120, 110, 40, 60, 20, 90, 80, 100, 110, 120, 130, 160] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic
          chartSeries={[25, 15, 20, 30, 10]}
          labels={['LinkedIn', 'Glassdoor', 'Indeed', 'Workday', 'Others']}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <LatestHires
          hires={[
            {
              id: 'PRD-005',
              name: 'Kanwal K',
              image: '/assets/avatar.jpeg',
              updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
            },
            {
              id: 'PRD-004',
              name: 'Sunny M',
              image: '/assets/avatar-1.png',
              updatedAt: dayjs().subtract(41, 'hours').subtract(3, 'hour').toDate(),
            },
            {
              id: 'PRD-003',
              name: 'Mike S',
              image: '/assets/avatar-2.png',
              updatedAt: dayjs().subtract(5, 'days').subtract(3, 'hour').toDate(),
            },
            {
              id: 'PRD-002',
              name: 'Rob G',
              image: '/assets/avatar-3.png',
              updatedAt: dayjs().subtract(10, 'days').subtract(2, 'hour').toDate(),
            },
            {
              id: 'PRD-001',
              name: 'Molly V',
              image: '/assets/avatar-4.png',
              updatedAt: dayjs().subtract(23, 'days').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'ORD-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 30.5,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-006',
              customer: { name: 'Cao Yu' },
              amount: 25.1,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-004',
              customer: { name: 'Alexa Richardson' },
              amount: 10.99,
              status: 'refunded',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-003',
              customer: { name: 'Anje Keizer' },
              amount: 96.43,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-002',
              customer: { name: 'Clarke Gillebert' },
              amount: 32.54,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-001',
              customer: { name: 'Adam Denisov' },
              amount: 16.76,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
