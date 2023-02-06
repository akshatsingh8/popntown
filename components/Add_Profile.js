import React from 'react';
import Form from './Form';
import axios from 'axios';
import { sendProfile } from '@/api-handler/frontend/utils';

const Add_Profile = () => {
    const getFormData= (data) => {
        sendProfile(data).then((value)=>console.log(value)).catch(err=>console.log(err));
    };
  return (
    <div><Form onSubmit={getFormData}/></div>
  )
}

export default Add_Profile