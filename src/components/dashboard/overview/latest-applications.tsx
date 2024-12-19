'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';

import { ApplicationsProps, ApplicationsTable } from './applications-table';

export function LatestApplications({ applications = [], sx }: ApplicationsProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Latest Active Applications" />
      <Divider />
      <Box sx={{ overflowX: 'auto', width: '100%' }}>
        <ApplicationsTable applications={applications} />
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
}
