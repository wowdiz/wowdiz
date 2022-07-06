import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AuthenticationService from '../../../Service/AuthenticationService';
const Login = () => {
    
    const {register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        AuthenticationService.executeJwtAuthenticationService(data)
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
        });
    }
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('user_email')}/><br/>
        <input {...register('user_pwd')}/><br/>
        <input type="submit" />
      </form>
    );
};

export default Login;