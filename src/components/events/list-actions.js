import { Card, Button, CardContent, List, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const ListActions = (props) => {
    const { list, ...others } = props;
  
    return (
        <Card>      
            <CardContent className="card-variant--2">
                <List className="list-actions">
                    {list.map((item, index) => (
                        <li className="list-actions__item" key={index}>
                            <Typography
                                color="textPrimary"
                                variant="body5"
                            >
                                {item.title}
                            </Typography>

                            <div className="list-actions__delimetr"></div>  
                            
                            <Button 
                                type="submit" 
                                variant="contained" 
                                color="default" 
                                size="default"
                                fontSize="medium"
                                href={item.href}
                            >Сформировать</Button>
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