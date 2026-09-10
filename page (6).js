'use client';
import {useEffect,useState} from 'react';
import {getSupabase} from '../../lib/supabase';
export default function Dashboard(){
const [email,setEmail]=useState('');
useEffect(()=>{getSupabase().auth.getSession().then(({data})=>{if(!data.session)location.href='/login';else setEmail(data.session.user.email)})},[]);
async function logout(){await getSupabase().auth.signOut();location.href='/login'}
return <main style={{padding:40}}><h1>EkoCraft Dashboard</h1><p>{email}</p><button onClick={logout}>Logout</button></main>
}
