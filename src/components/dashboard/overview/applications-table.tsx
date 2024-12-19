'use client';

import React from 'react';
import { Box, Chip, SxProps } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import dayjs from 'dayjs';

const statusMap = {
  applied: { label: 'Applied', color: 'default' },
  screen: { label: 'Screen', color: 'info' },
  interviewing: { label: 'Interviewing', color: 'warning' },
  offer: { label: 'Offer', color: 'primary' },
  hired: { label: 'Hired', color: 'success' },
} as const;

type StatusType = keyof typeof statusMap;

export interface Application {
  id: string;
  name: string;
  position: string;
  status: 'applied' | 'screen' | 'interviewing' | 'offer' | 'hired';
  appliedAt: Date;
}

export interface ApplicationsProps {
  applications?: Application[];
  pageSize?: number;
  sx?: SxProps;
}

const columns: GridColDef<Application[][number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Applicant name',
    width: 150,
  },
  {
    field: 'position',
    headerName: 'Position',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    editable: true,
    renderCell: (params: GridRenderCellParams) => {
      const { label, color } = statusMap[params.row['status'] as StatusType] ?? {
        label: 'Unknown',
        color: 'default',
      };

      return <Chip color={color} label={label} size="small" />;
    },
  },
  {
    field: 'appliedAt',
    headerName: 'Applied at',
    width: 160,

    valueGetter: (value: Date) => dayjs(value).format('MMM D, YYYY'),
  },
];

export function ApplicationsTable({ applications, pageSize = 5 }: ApplicationsProps): React.JSX.Element {
  return (
    <Box sx={{ overflowX: 'auto', width: '100%' }}>
      <DataGrid
        rows={applications}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize,
            },
          },
        }}
        pageSizeOptions={[pageSize]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
