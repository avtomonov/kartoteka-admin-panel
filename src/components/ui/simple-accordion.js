import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import { Signature as SignatureIcon } from '../../icons/signature';
import { Profile as ProfileIcon } from '../../icons/profile';
import { Pin as PinIcon } from '../../icons/pin';
import { ArrowDown as ArrowDownIcon } from '../../icons/arrow-down';

// TODO create a default component with pluggable content add checks an empty value

export const SimpleAccordion = (props) => {
  const { item, ...others } = props;

  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };

  return (
    <Accordion
      square={true}
      onChange={handleChange('panel')}
      expanded={expanded === 'panel'} 
    >
      <AccordionSummary
          expandIcon={<ArrowDownIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>
            <Typography variant="body5" component="p">{ item.title }</Typography>
            <Typography
              color="notification.main"
              variant="body8"
              component="p"
            >{ item.subtitle }</Typography>
          </div>
      </AccordionSummary>
      
      <AccordionDetails>
          <Box>
            <Typography component="p">{ item.head.title }</Typography>
            <Typography variant="body8" component="p">{ item.head.contractTime }</Typography>
          </Box>

          <Box
            sx={{
              marginTop: '30px'
            }}
          >
            <List>
              <ListItem>
                <PinIcon fontSize="small" /> 
                { item.adress }
              </ListItem>

              {/* TODO endings */}
              <ListItem>
                <ProfileIcon fontSize="small" /> 
                  { item.personnelCount } сотрудника
              </ListItem>
            </List>
          </Box>

          {item.oldNames != undefined &&
            <Box sx={{
              marginTop: '30px'
            }}>
              <Typography 
                variant="body5" 
                component="p"
                sx={{
                  marginBottom: '11px'
                }}
              >Наименование организации до реорганизации</Typography>
                
              <List
            
              >
                {item.oldNames.map((oldName, index) => (
                    <ListItem key={index}>
                      <SignatureIcon fontSize="small" />
                      <p className="text-secondary list-square__item__old-name">{oldName}</p>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          }
      </AccordionDetails>
    </Accordion>
  );
};


SimpleAccordion.propTypes = {
  structures: PropTypes.object,
};