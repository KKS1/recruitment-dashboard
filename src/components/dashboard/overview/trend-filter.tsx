'use client';

import React, { useState } from 'react';
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';
import { FadersHorizontal as FadersHorizontalIcon } from '@phosphor-icons/react/dist/ssr/FadersHorizontal';

type FormValuesKeys = 'duration' | 'role' | 'source';

const rolesEnum = {
  All: 0,
  Software_Engineer: 1,
  Product_Manager: 2,
  Designer: 3,
  Sales: 4,
  Marketing: 5,
} as const;

const timePeriods = [
  { id: 0, label: 'All', value: 0 },
  { id: 1, label: '15 Days', value: 15 },
  { id: 2, label: '30 Days', value: 30 },
  { id: 3, label: '60 Days', value: 60 },
  { id: 4, label: '90 Days', value: 90 },
];

const roles = [
  { id: 0, label: 'All', value: rolesEnum.All },
  { id: 1, label: 'Software Engineer', value: rolesEnum.Software_Engineer },
  { id: 2, label: 'Product Manager', value: rolesEnum.Product_Manager },
  { id: 3, label: 'Designer', value: rolesEnum.Designer },
  { id: 4, label: 'Sales', value: rolesEnum.Sales },
  { id: 4, label: 'Marketing', value: rolesEnum.Marketing },
];

const sources = [
  { id: 0, label: 'All', value: 'all' },
  { id: 1, label: 'LinkedIn', value: 'linkedin' },
  { id: 2, label: 'Glassdoor', value: 'glassdoor' },
  { id: 3, label: 'Indeed', value: 'indeed' },
  { id: 4, label: 'Workday', value: 'workday' },
  { id: 4, label: 'Others', value: 'others' },
];

export function TrendFilter(): React.JSX.Element {
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState<Record<FormValuesKeys, string | number | boolean>>({
    duration: 0,
    role: 0,
    source: 'all',
  });

  const handleChange = (e: SelectChangeEvent<string | number | boolean>) => {
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  return (
    <Stack direction="row" sx={{ width: '100%', justifyContent: 'end', gap: 3, alignItems: 'center' }}>
      {visible ? (
        <Stack direction={{ xs: 'column', md: 'row' }} width="100%" gap={3} justifyContent="end">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="duration-select-label">Duration</InputLabel>
              <Select
                labelId="duration-select-label"
                id="duration-select"
                value={formValues.duration}
                label="Duration"
                name="duration"
                onChange={handleChange}
              >
                {timePeriods.map((period) => {
                  const { id, label, value } = period;
                  return (
                    <MenuItem key={id} value={value}>
                      {label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 160 }}>
            <FormControl fullWidth>
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                value={formValues.role}
                label="Role"
                name="role"
                onChange={handleChange}
              >
                {roles.map((role) => {
                  const { id, label, value } = role;
                  return (
                    <MenuItem key={id} value={value}>
                      {label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="time-period-select-label">Source</InputLabel>
              <Select
                labelId="source-select-label"
                id="source-select"
                value={formValues.source}
                label="Source"
                name="source"
                onChange={handleChange}
              >
                {sources.map((source) => {
                  const { id, label, value } = source;
                  return (
                    <MenuItem key={id} value={value}>
                      {label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Stack>
      ) : (
        ''
      )}

      <IconButton
        aria-label="filterToggle"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <FadersHorizontalIcon />
      </IconButton>
    </Stack>
  );
}
