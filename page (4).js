'use client';
import {useState} from 'react';
export default function Inquiry(){const [m,setM]=useState('');return <main className="wrap"><h1>Project Inquiry</h1><input placeholder="Name"/><input placeholder="Email"/><textarea placeholder="Project details"/><button onClick={()=>setM('Request sent')}>Submit</button><p>{m}</p></main>}
