import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box'
import ProfileHeader from './profileHeader';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export default function ControlledAccordions({children}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
    sx={{
      marginTop:10,
      marginLeft:40,
      width: 500,
      height: 300,
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
      
      },
    }}>
      <ProfileHeader/>
       <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Name
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <TextField id="standard-basic" label="" variant="standard"  sx={{ width: 400}}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Address</Typography>
        
        </AccordionSummary>
        <AccordionDetails>
        <TextField id="standard-basic" label="" variant="standard" sx={{ width: 400}}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Email
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <TextField id="standard-basic" label="" variant="standard" sx={{ width: 400}} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Password</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextField id="standard-basic" label="" variant="standard"sx={{ width: 400}} />
        </AccordionDetails>
      </Accordion>
    </div>
    <br></br>
    <Button variant="contained" endIcon={<SaveIcon /> }nsx={{ width: 40,marginLeft:10}}>
  Save
</Button>
    </Box>
   
  );
}