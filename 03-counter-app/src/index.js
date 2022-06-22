import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
//import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './index.css';

const saludo="Hola, soy Mariana";
const root = createRoot(document.getElementById('root'));

root.render(<PrimeraApp  saludo={saludo} />);
//root.render(<CounterApp  value={10} />);