import React from 'react'
import FormControl from '@mui/material/FormControl';
import {Facebook , Twitter,Email,Instagram} from '@mui/icons-material/';
import InputAdornment from '@mui/material/InputAdornment'
import Input from '@mui/material/Input'
const SoicalInput = () => {
  return (
    <FormControl variant="standard">
  
    <Input inputProps={{
        style:{width:'40%'}
    }}
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment position="start">
          <Facebook />
        </InputAdornment>
      }
    />
      <Input inputProps={{
        style:{width:'40%'}
    }}
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment position="start">
          <Twitter />
        </InputAdornment>
      }
    />
      <Input inputProps={{
        style:{width:'40%'}
    }}
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment position="start">
          <Email />
        </InputAdornment>
      }
    />
    
       </FormControl>
  )
}

export default SoicalInput