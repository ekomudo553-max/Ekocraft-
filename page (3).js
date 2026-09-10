'use client';
import {useState} from 'react';
import {getSupabase} from '../../lib/supabase';
export default function Login(){
const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[msg,setMsg]=useState('');
async function login(){const s=getSupabase();const {error}=await s.auth.signInWithPassword({email,password});if(error)setMsg(error.message);else location.href='/dashboard';}
return <main style={{padding:40}}><h1>Login</h1><input placeholder="Email" onChange={e=>setEmail(e.target.value)}/><input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/><button onClick={login}>Login</button><p>{msg}</p></main>
}
