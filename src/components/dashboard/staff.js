import { v4 as uuid } from 'uuid';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  List,
  Link,
  ListItem,
  Typography
} from '@mui/material';
import { Phone as PhoneIcon } from '../../icons/phone';
import { Email as EmailIcon } from '../../icons/email';
import NextLink from 'next/link';


const users = [
  {
    id: uuid(),
    name: 'Иванов Иван Иванович',
    role: 'Заместитель',
    phone: '89266603596',
    email: 'test@test.test'
  },
  {
    id: uuid(),
    name: 'Константинов Иван Иванович',
    role: 'Секретарь',
    phone: '89266603596',
    email: 'test@test.test'
  }
];

export const Staff = (props) => (
  <Card {...props}>
    <CardContent>
      <CardHeader
        subtitle={`${users.length} in total`}
        title="Сотрудники"
        sx={{
          paddingBottom: '5px',
        }}
        component="h2"
      />

      <List
        sx={{
          paddingBottom: {
            xs: 8,
            lg: '40px'
          }
        }}
      >
      {users.map((user, i) => (
        <ListItem
          divider={i < users.length - 1}
          key={user.id}
          sx={{
            paddingBottom: '4px',
            paddingLeft: '0',
            paddingRight: '0',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            border: 0
          }}
        >
            <Box>
              <Typography
                  color="textPrimary"
                  variant="subtitle1"
                  component="p"

                  sx={{
                    paddingRight: '5px',
                  }}
              >
                {user.name}
              </Typography>
              <Typography
                color="textSecondary"
                variant="subtitle1"
                component="p"
              >
                {user.role}
              </Typography>
            </Box>

            <Box  
              sx={{
                marginTop: '-20px',
                marginRight: '-10px',
                display: 'flex',
                flexWrap: 'nowrap'
              }}
            >
              <IconButton
                component="a"
                href="tel:89266603596"
                color="primary"
                sx={{ 
                  '& .MuiSvgIcon-root': {
                    fontSize: '16px' 
                  }
                }} 
              >
                <PhoneIcon fontSize="small" />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:web@hu2.ru?subject=Вопрос по разработке"
                color="primary"
                sx={{ 
                  ml: '6px', 
                  '& .MuiSvgIcon-root': {
                    fontSize: '18px' 
                  }
                }} 
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Box>
        </ListItem>
      ))}
    </List>
    <NextLink
      href="/staff"
      passHref
    >
      <Link
        href="/staff"
        color="secondary"
        variant="body6"
        underline="none"
        sx={{ 
          position: 'absolute',
          left: '20px',
          bottom: '26px' 
        }} 
      >
        Показать еще
      </Link>
    </NextLink>
    </CardContent>
  </Card>
);
