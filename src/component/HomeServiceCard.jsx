import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider/AuthProvider';
import "./CSS.css"

const HomeServiceCard = ({service}) => {
    const {user} = useContext(AuthContext);
    let {_id, title, price, quantity, quality, outfit,time} = service;
    return (
        <div className={`border-4 border-[#836B5D] text-center p-8 sm:p-[4rem] service hover:drop-shadow-[0_35px_35px_rgba(0,0,0,1.25)]`}>
            <h1 className='font-bold text-4xl border-b-2 border-[#836b5da1]'>{title}</h1>
            <h2 className='text-4xl font-light p-2'>${price}</h2>
            <h2 className='text-xl p-2'>{time}</h2>
            <h2 className='text-xl p-2'>{quantity}</h2>
            <h2 className='text-xl p-2'>{outfit}</h2>
            <h2 className='text-xl p-2'>{quality}</h2>
             {
                user ? <Link to={`/services/${_id}`}><button className='btn btn-accent'>Continue</button></Link>:
                <Link to={`/login`}><button className='btn btn-accent'>Continue</button></Link>
             }
        </div>
    );
};

export default HomeServiceCard;