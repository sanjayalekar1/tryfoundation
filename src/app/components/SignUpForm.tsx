"use client"
import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const SignUpFrom = () =>{

    const initialValues = {firstName:"", lastName:"", email:"", password:""};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({}); 
    const [isSubmit, setIsSubmit] = useState(false);


    const changeHandler = (event:React.FormEvent<HTMLFormElement>) =>{
        setFormErrors({});
        const{name, value} = event.currentTarget;
        setFormValues({...formValues , [name]: value});
        //console.log(formValues);
        
    }

    const validate = (values:React.FormEvent<HTMLFormElement>) =>{
        const errors = {};
        const regex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/i';
        if (!values.firstName) {
            errors.firstName = "First name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.email.match(regex)) {
            errors.email = "Enter Valid Email";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        if(values.confirmPassword !== values.password){
            errors.confirmPassword = "Confirmed password does not match";
        }

        return errors;
        //setFormErrors(errors);
        
    }

    useEffect(() => {
        //console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          //console.log(formValues);
        }
      }, [formErrors]);

    const registrationHandler = (event:any) =>{
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        setFormErrors(validate(formValues));
        console.log(formValues);
        setIsSubmit(true);
    };

    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit = {registrationHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange = {changeHandler}
                />
                <p className = 'text-red-600' >{formErrors.firstName}</p>
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange = {changeHandler}
                />
                <p className = 'text-red-600'>{formErrors.lastName}</p>
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange = {changeHandler}
                />
                <p className = 'text-red-600'>{formErrors.email}</p>
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange = {changeHandler}
                />
                <p className = 'text-red-600'>{formErrors.password}</p>
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange = {changeHandler}
                />
                 <p className = 'text-red-600'>{formErrors.confirmPassword}</p>
              </Grid>
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox 
                    value="allowExtraEmails" 
                    color="primary" 
                    name="termsCheck"
                    id="termsCheck" 
                      />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
            className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
}
export default SignUpFrom;