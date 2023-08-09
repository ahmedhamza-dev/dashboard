import { Box, Button } from '@mui/material';
import Helmet from '../../../components/Helmet';
import DataTable from '../../../components/Datatable';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from './api';
import { CategoryData } from './models/Category.model';
import { GridColDef } from '@mui/x-data-grid';
import { ActionButtonsWrapper } from '../../../utils/styled';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  {
    field: 'nameAr',
    headerName: 'Arabic Name',
    flex: 1,
  },
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

const Category = () => {
  const navigate = useNavigate();
  const [paginationSize, setPaginationSize] = useState(10);
  const [paginationPage, setPaginationPage] = useState(0);
  const [categories, setCategories] = useState<CategoryData[]>([]);

  const { data } = useGetCategoriesQuery({ size: paginationSize, page: paginationPage });

  useEffect(() => {
    const categoriesData = data?.data?.packageCategories;
    if (categoriesData) setCategories(categoriesData);
  }, [data]);

  return (
    <>
      <Box width='100%'>
        <Helmet
          title='Category'
          buttonProps={{ children: 'CREATE', onClick: () => navigate('create') }}
        />
      </Box>
      <DataTable
        rows={categories}
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

export default Category;
