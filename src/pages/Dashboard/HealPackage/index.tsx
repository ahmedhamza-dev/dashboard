import Helmet from '../../../components/Helmet';
import { Box, Button } from '@mui/material';
import DataTable from '../../../components/Datatable';
import { useNavigate } from 'react-router-dom';
import { useGetHealPackagesQuery } from './api';
import { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { ActionButtonsWrapper } from '../../../utils/styled';
import { HealPackageData } from './models/HealPackage.model';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  {
    field: 'nameAr',
    headerName: 'Arabic Name',
    flex: 1,
  },
  { field: 'price', headerName: 'Price', flex: 1 },
  { field: 'costing', headerName: 'Costing', flex: 1 },

  {
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
    renderCell: (params) => {
      const handleEdit = () => {
        console.log('Edit clicked for ID:', params.row.id);
      };

      const handleRemove = () => {
        console.log('Remove clicked for ID:', params.row.id);
      };

      return (
        <ActionButtonsWrapper>
          <Button variant='outlined' color='info' onClick={handleEdit}>
            Edit
          </Button>
          <Button variant='outlined' color='error' onClick={handleRemove}>
            Remove
          </Button>
        </ActionButtonsWrapper>
      );
    },
  },
];

const HealPackage = () => {
  const [healPackages, setHealPackages] = useState<HealPackageData[]>([]);
  const navigate = useNavigate();
  const { data } = useGetHealPackagesQuery({ page: 0, size: 20 });

  useEffect(() => {
    const healPackagesData = data?.data.healPackages;
    if (healPackagesData) setHealPackages(healPackagesData);
  }, [data]);

  return (
    <>
      <Box width='100%'>
        <Helmet
          title='Heal Package'
          buttonProps={{ children: 'CREATE', onClick: () => navigate('create') }}
        />
      </Box>
      <DataTable
        rows={healPackages}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </>
  );
};

export default HealPackage;
