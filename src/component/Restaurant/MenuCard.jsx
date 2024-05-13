import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashews"]
  },
  {
    category: "Protein",
    ingredient: ["Chicken strips", "Beef strips"]
  }
]


export const MenuCard = ({item}) => {
  const handleCheckBoxChange =(value)=>{
      console.log("value")
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
              <img className='w-[7rem] h-[7rem] object-cover'
                src={item.images[0]} alt="" />
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>
                  {item.name}
                </p>
                <p>
                  {item.price} DHS
                </p>
                <p className='text-gray-400'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
              {
                demo.map((item) =>
                  <div>
                    <p>{item.category} </p>
                    <FormGroup>
                      {item.ingredient.map((ingredient) => (
                        <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={ingredient} />
                      ))}
                    </FormGroup>

                  </div>
                )
              }
            </div>
            <div className='pt-5'>
              <Button type='submit' variant='contained' disabled={false}> 
                {true?"Add to Cart":"Out Of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

