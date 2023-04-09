import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';
import Uncle from '../Uncle/Uncle';
import { createBrowserRouter } from 'react-router-dom';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)


    return (
        <div className='grandpa'>
            <h2>this is Grandpa</h2>
            <p>Has Mone: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. create context
 * 2. create a provider and pass the value
 * 3. use useContext to receive the value
 * */ 