import { Box } from '@mui/material';
import Helmet from '../../../components/Helmet';
import DataTable from '../../../components/Datatable';
import { columns, rows } from '../../../config/data';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box width='100%'>
        <Helmet
          title='Category'
          buttonProps={{ children: 'CREATE', onClick: () => navigate('create') }}
        />
      </Box>
      <DataTable
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </>
  );
};

export default Category;
