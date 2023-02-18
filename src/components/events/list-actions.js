import { Card, Button, CardContent, List } from '@mui/material';
import PropTypes from 'prop-types';

export const ListActions = (props) => {
    const { list, ...others } = props;
  
    return (
        <Card>      
            <CardContent>
                <List>
                    {list.map((item, index) => (
                        <li key={index}>
                            {item.title}
                            <Button href={item.href}>Сформировать</Button>
                        </li>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};


ListActions.propTypes = {
    list: PropTypes.array,
};