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


export const MenuCard = () => {
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
                src="https://asset.kompas.com/crops/fP_Q5TD9BOn5G5JTnntgtDIjQMI=/53x36:933x623/750x500/data/photo/2021/10/21/6171492e1ea12.jpg" alt="" />
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>
                  Burger
                </p>
                <p>
                  38  Dhs
                </p>
                <p className='text-gray-400'>
                  Juicy beef patty topped with melted cheddar cheese, crisp lettuce, ripe tomato slices, and tangy pickles
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

