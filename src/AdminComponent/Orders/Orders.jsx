import React, { useState } from 'react';
import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { OrderTable } from './OrderTable';

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Delivered", value: "DELIVERED" },
  { label: "Out for delivery", value: "OUT_FOR_DELIVERY" },
  { label: "All", value: "all" }
];

export const Orders = () => {
  const [filterValue, setFilterValue] = useState("all"); // Default filter value

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className='px-2'>
      <Card className='p-5'> 
        <Typography sx={{ paddingBottom: "1rem" }} variant='h5'> 
          Order Status
        </Typography>
        <FormControl>
          <RadioGroup onChange={handleFilter} row name='category' value={filterValue}>
            {orderStatus.map((item) => (
              <FormControlLabel
                key={item.label}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable filterValue={filterValue} />
    </div>
  );
};
