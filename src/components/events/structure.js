import { Card, CardContent, CardHeader } from '@mui/material';
import { SimpleAccordion } from '../ui/simple-accordion';
import PropTypes from 'prop-types';

export const Structure = (props) => {
    const { structures, ...others } = props;
  
    return (
        <Card {...props}>      
            <CardContent>
                <CardHeader
                    component="h2"
                    title="Структура предприятия"
                />

                <div>
                    {structures.map((item, index) => (
                        <SimpleAccordion key={index} item={item} />
                    ))}
                </div>

            </CardContent>
        </Card>
    );
};


Structure.propTypes = {
    structures: PropTypes.array,
};