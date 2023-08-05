import Helmet from '../../../components/Helmet';
import { Box } from '@mui/material';
import DataTable from '../../../components/Datatable';
import { useNavigate } from 'react-router-dom';
import { columns, rows } from '../../../config/data';

const HealPackage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box width='100%'>
        <Helmet
          title='Heal Package'
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

export default HealPackage;
