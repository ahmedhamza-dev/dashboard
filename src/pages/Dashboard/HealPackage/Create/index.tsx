import { z } from 'zod';
import Card from '../../../../components/Card';
import Helmet from '../../../../components/Helmet';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, FormControl, TextField } from '@mui/material';
import { useCreateHealPackageMutation } from '../api';
import { useGetCategoriesQuery } from '../../Category/api';
import { SyntheticEvent, useEffect, useState } from 'react';
import { CategoryData } from '../../Category/models/Category.model';
import { toast } from 'react-toastify';

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  nameAr: z.string(),
  costing: z.string(),
  price: z.string(),
  category: z.number(),
});

const CreateProduct = () => {
  const [categoriesDropdown, setCategoriesDropdown] = useState<CategoryData[]>([]);
  const [createHealPackage, {}] = useCreateHealPackageMutation();
  const { data: categories } = useGetCategoriesQuery({ size: 10, page: 0 });

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const categs = categories?.data.packageCategories.map((res) => {
      return { ...res, value: res.id };
    });
    if (categs) setCategoriesDropdown(categs);
    console.log(categs);
  }, [categories]);

  const onSubmit = async (data: FieldValues) => {
    data.price = +data.price;
    data.costing = +data.costing;
    data.category = { id: data.category };
    console.log(data);
    try {
      await createHealPackage({ ...data });
      toast.success('Heal Package is created!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/dashboard/healpackage');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleAutocompleteChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: CategoryData | null,
  ) => {
    setValue('category', newValue ? newValue.id : '');
  };

  return (
    <>
      <Helmet
        title='Heal Package'
        buttonProps={{ text: 'Save', onClick: handleSubmit(onSubmit) }}
      />
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 mt-2 mb-2'>
              <FormControl fullWidth error={!!errors.name}>
                <TextField
                  required
                  id='name'
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
            <div className='col-md-6 mt-2 mb-2'>
              <FormControl fullWidth error={!!errors.nameAr}>
                <TextField
                  id='price'
                  label='Price'
                  type='number'
                  variant='outlined'
                  {...register('price')}
                />
              </FormControl>
            </div>
            <div className='col-md-6 mt-2 mb-2'>
              <FormControl fullWidth error={!!errors.nameAr}>
                <TextField
                  id='costing'
                  label='Costing'
                  type='number'
                  variant='outlined'
                  {...register('costing')}
                />
              </FormControl>
            </div>
            <div className='col-md-6 mt-2 mb-2'>
              <Autocomplete
                getOptionLabel={(option) => option.name}
                options={categoriesDropdown}
                renderInput={(params: any) => (
                  <TextField {...params} {...params.InputProps} label='Categories' />
                )}
                onChange={handleAutocompleteChange}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreateProduct;
