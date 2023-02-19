import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import { SimpleAccordion } from '../ui/simple-accordion';
import PropTypes from 'prop-types';

export const Structure = (props) => {
    const { structures, ...others } = props;
  
    return (
        <Card>      
            <CardContent
                sx={{
                    paddingBottom: 0,
                    paddingTop: '33px',
                    '&:last-child': {
                        paddingBottom: 0,
                    }
                }}
            >
                <CardHeader
                    component="h2"
                    title="Структура предприятия"
                    titleTypographyProps={{
                        variant: "body5"
                    }}
                    sx={{
                        marginBottom: '33px'
                    }}
                />
                    {structures.map((item, index) => (
                        <div key={index}>
                            <Divider/>
                            <SimpleAccordion item={item} />
                        </div>
                    ))}
            </CardContent>
        </Card>
    );
};


Structure.propTypes = {
    structures: PropTypes.array,
};