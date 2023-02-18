import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

export const SimpleAccordion = (props) => {
  const { item, ...others } = props;

  return (
    <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{ item.title }</Typography>
          <Typography>{ item.subtitle }</Typography>
      </AccordionSummary>
      <AccordionDetails>
          <Typography>{ item.head.title }</Typography>
          <Typography>{ item.head.contractTime }</Typography>

          {item.oldNames != undefined &&
            <p>Наименование организации до реорганизации</p>
          }

          {item.oldNames != undefined &&
            item.oldNames.map((oldName, index) => (
              <p className="text-secondary list-square__item__old-name" key={index}>{oldName}</p>
            ))
          }

          <Typography>{ item.adress }</Typography>

          {/* TODO */}
          <Typography>{ item.personnelCount } сотрудника</Typography>
      </AccordionDetails>
    </Accordion>
  );
};


SimpleAccordion.propTypes = {
  structures: PropTypes.object,
};