// 'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import { applications } from '@/app/data';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { ApplicationsTable } from '@/components/dashboard/overview/applications-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Applications</Typography>
        </Stack>
      </Stack>
      <ApplicationsTable pageSize={10} applications={applications} sx={{ height: '100%' }} />
    </Stack>
  );
}
