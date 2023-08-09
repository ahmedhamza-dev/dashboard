import Card from '../../../../components/Card';
import Helmet from '../../../../components/Helmet';
import { z } from 'zod';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, TextField } from '@mui/material';
import { useCreateCategoryMutation } from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  nameAr: z.string(),
  description: z.string(),
});

const CreateCategory = () => {
  const [createCategory, {}] = useCreateCategoryMutation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const createCategoryRequest = async (data: FieldValues) => {
    try {
      await createCategory({ ...data });
      toast.success('Category is created!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/dashboard/category');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  const onSubmit = (data: FieldValues) => {
    createCategoryRequest(data);
  };

  return (
    <>
      <Helmet title='Category' buttonProps={{ text: 'Save', onClick: handleSubmit(onSubmit) }} />
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 mt-2 mb-2'>
              <FormControl fullWidth error={!!errors.name}>
                <TextField
                  id='name'
                  required
                  label='Name'
                  variant='outlined'
                  {...register('name')}
                />
              </FormControl>
            </div>
            <div className='col-md-6 mt-2 mb-2'>
              <FormControl fullWidth error={!!errors.nameAr}>
                <TextField
                  id='nameAr'
                  label='Arabic Name'
                  variant='outlined'
                  {...register('nameAr')}
                />
              </FormControl>
            </div>
            <div className='col-md-12 mt-2 mb-2'>
              <FormControl fullWidth error={!!errors.description}>
                <TextField
                  id='description'
                  label='Description'
                  variant='outlined'
                  {...register('description')}
                />
              </FormControl>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreateCategory;
