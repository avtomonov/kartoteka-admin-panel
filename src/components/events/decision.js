import { Card, Box, TextField, CardContent, Divider, MenuItem, Button } from '@mui/material';



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
        <Card>      
            <CardContent>
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
                        maxRows={4}
                        fullWidth
                        variant="filled"
                        focused 
                    />
                    <Divider/>
                    <TextField  
                        id="organization"
                        label="Организация"
                        defaultValue="ООО “РесерчХолд”"
                        focused
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        id="type"
                        select
                        label="Вид проверки"
                        defaultValue="plans"
                        fullWidth
                        variant="filled"
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
                    >
                        {controlMethods.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        id="control-period"
                        label="Сроки проведения проверки"
                        dataType
                        defaultValue="02.08.2020 - 05.08.2020"
                        fullWidth
                        variant="filled"
                    />

                    <TextField
                        id="control-place"
                        label="Место проведения проверки"
                        defaultValue="г. Москва, Лененский пр-т 178, к4"
                        fullWidth
                        variant="filled"
                    >
                        {controlMethods.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button type="submit" variant="outlined">Написать</Button>
                </Box>
            </CardContent>
        </Card>
    );
};

