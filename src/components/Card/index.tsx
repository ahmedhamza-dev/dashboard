import React from 'react';
import { Props } from './props';
import { Box, useTheme } from '@mui/material';

const Card: React.FC<Props> = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={
        theme.palette.mode === 'light'
          ? {
              backgroundColor: '#fbfbfb',
              boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
              padding: '1rem .8rem',
              borderRadius: 2,
            }
          : null
      }
    >
      {props.children}
    </Box>
  );
};

export default Card;
