import dayjs from 'dayjs';

export interface Application {
  id: string;
  name: string;
  position: string;
  status: 'applied' | 'screen' | 'interviewing' | 'offer' | 'hired';
  appliedAt: Date;
}

export const applications: Application[] = [
  {
    id: 'AT-007',
    name: 'Abraham J',
    position: 'Software Engineer',
    status: 'applied',
    appliedAt: dayjs().subtract(3, 'days').toDate(),
  },
  {
    id: 'AT-006',
    name: 'Cindy L',
    position: 'Product Manager',
    status: 'screen',
    appliedAt: dayjs().subtract(5, 'days').toDate(),
  },
  {
    id: 'AT-004',
    name: 'Alexa G',
    position: 'Designer',
    status: 'interviewing',
    appliedAt: dayjs().subtract(7, 'days').toDate(),
  },
  {
    id: 'AT-003',
    name: 'Anje Keizer',
    position: 'Sales',
    status: 'offer',
    appliedAt: dayjs().subtract(10, 'days').toDate(),
  },
  {
    id: 'AT-002',
    name: 'Clarke Gillebert',
    position: 'Marketing',
    status: 'hired',
    appliedAt: dayjs().subtract(13, 'days').toDate(),
  },
  {
    id: 'AT-001',
    name: 'Adam Denisov',
    position: 'Software Engineer',
    status: 'interviewing',
    appliedAt: dayjs().subtract(15, 'days').toDate(),
  },
  {
    id: 'AT-000',
    name: 'Maven G',
    position: 'Sales',
    status: 'offer',
    appliedAt: dayjs().subtract(18, 'days').toDate(),
  },
  {
    id: 'AT-008',
    name: 'Mauri G',
    position: 'Sales',
    status: 'interviewing',
    appliedAt: dayjs().subtract(21, 'days').toDate(),
  },
  {
    id: 'AT-009',
    name: 'Abhi T',
    position: 'Software Engineer',
    status: 'applied',
    appliedAt: dayjs().subtract(23, 'days').toDate(),
  },
  {
    id: 'AT-010',
    name: 'Wan Wil',
    position: 'Sales',
    status: 'screen',
    appliedAt: dayjs().subtract(25, 'days').toDate(),
  },
  {
    id: 'AT-011',
    name: 'Tauric H',
    position: 'Designer',
    status: 'offer',
    appliedAt: dayjs().subtract(26, 'days').toDate(),
  },
  {
    id: 'AT-012',
    name: 'Kistelo M',
    position: 'Product Manager',
    status: 'hired',
    appliedAt: dayjs().subtract(27, 'days').toDate(),
  },
  {
    id: 'AT-013',
    name: 'Sonic G',
    position: 'Sales',
    status: 'offer',
    appliedAt: dayjs().subtract(28, 'days').toDate(),
  },
];
