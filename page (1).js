'use client';
import {useState} from 'react';
import {getSupabase} from '../../lib/supabase';
export default function Signup(){
const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[msg,setMsg]=useState('');
async function signup(){const {data,error}=await getSupabase().auth.signUp({email,password});if(error)setMsg(error.message);else setMsg(data.user?'Account created. Check email.':'Signup failed');}
return <main style={{padding:40}}><h1>Sign Up</h1><input placeholder="Email" onChange={e=>setEmail(e.target.value)}/><input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/><button onClick={signup}>Sign Up</button><p>{msg}</p></main>
}
