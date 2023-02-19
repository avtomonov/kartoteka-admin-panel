import { Card, Box, TextField, CardContent, Divider, MenuItem, Button } from '@mui/material';
import { ArrowDown as ArrowDownIcon } from '../../icons/arrow-down';


const controls = [
    {
        value: 'plans',
        label: 'Плановая',
        id: 1
    },
    {
        value: 'not-plans',
        label: 'Внеплановая',
        id: 2
    }
]

const controlTypes = [
    {
        value: 'out',
        label: 'Выездная',
        id: 3
    },
    {
        value: 'remote',
        label: 'Дистанционная',
        id: 4
    }
];

const controlMethods = [
    {
      value: 'fact',
      label: 'Фактическая',
      id: 5
    },
];

export const Decision = (props) => {
    const { list, ...others } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Форма отправлена')
    }
  
    return (
        <Card
            sx={{
                flex: '1'
            }}
        >      
            <CardContent
                className="card-variant"
            >
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        id="decision"
                        label="Решение о проведении поверки"
                        placeholder="Введите текст"
                        multiline
                        rows={2}
                        fullWidth
                        variant="filled"
                        focused 
                    />
                    <Divider
                        sx={{
                            margin: '14px 0 26px'
                        }}
                    />
                    <TextField  
                        id="organization"
                        label="Организация"
                        defaultValue="ООО “РесерчХолд”"
                        focused
                        fullWidth
                        variant="filled"
                    />

                    <Box
                        sx={{
                            maxWidth: {
                                xs: '100%',
                                md: '303px'
                            }
                        }}
                    >
                        {/* TODO create custom select component */}
                        <TextField
                            id="type"
                            select
                            label="Вид проверки"
                            defaultValue="plans"
                            fullWidth
                            variant="filled"
                            focused 
                            SelectProps={{
                                IconComponent: () => <ArrowDownIcon />,
                            }}
                        >
                            {controls.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="control"
                            select
                            label="Форма проверки"
                            defaultValue="out"
                            fullWidth
                            variant="filled"
                            focused 
                            SelectProps={{
                                IconComponent: () => <ArrowDownIcon />,
                            }}
                        >
                            {controlTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="control-method"
                            select
                            label="Метод проверки"
                            defaultValue="fact"
                            fullWidth
                            variant="filled"
                            focused 
                            SelectProps={{
                                IconComponent: () => <ArrowDownIcon />,
                            }}
                        >
                            {controlMethods.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    <TextField
                        id="control-period"
                        label="Сроки проведения проверки"
                        defaultValue="02.08.2020 - 05.08.2020"
                        fullWidth
                        variant="filled"
                        focused 
                        sx={{
                            textAlign: 'center',
                            maxWidth: {
                                xs: '100%',
                                md: '194px'
                            }
                        }}
                    />

                    <TextField
                        id="control-place"
                        label="Место проведения проверки"
                        defaultValue="г. Москва, Лененский пр-т 178, к4"
                        fullWidth
                        variant="filled"
                        focused 
                    >
                        {controlMethods.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    {/* TODO create form footer component */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '5px 0 4px'
                        }}
                    >
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="default" 
                            size="default"
                            fontSize="medium"
                        >Написать</Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

