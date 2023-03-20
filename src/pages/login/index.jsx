import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Card, Grid } from '@mui/material';
import './css/style.css';
export function Login() {
    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '38ch' },
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}
            noValidate
            autoComplete="off"
        >
            <div className='image'>
                
            </div>
            <div>
                <Card sx={{ paddingX: 20, paddingY: 10, height:'100%' }}>
                    <Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <h1>Login</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="CPF"
                                id="outlined-size-small"
                                placeholder="Insiea CPF"
                                size="small"
                                className='input'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Senha"
                                id="outlined-size-small"
                                placeholder='Insira senha'
                                size="small"
                                type="password"
                                className='input'
                            
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained">Login</Button>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </Box>

    );
}