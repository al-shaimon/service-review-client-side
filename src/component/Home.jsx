import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider/AuthProvider';
import HomeService from './HomeService';
import './CSS.css';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto px-4">
      {/* intro part */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row sm:flex-col">
          <img
            src="https://imgdb.net/storage/uploads/77d94bb019bdf33c6157361695247f4303f31c1f3a469e69d579071264feec06.jpg"
            className="max-w-sm rounded-lg shadow-2xl sm:w-1/4 w-5/6"
            alt="owner"
          />
          <div>
            <h1 className="sm:text-5xl font-bold">Welcome</h1>
            <p className="py-6 text-xl">
              Hi I am Shaimon. I am a photographer. In this website I gave some work of my which is
              my most favorite. Hope you like it. Also in service part I put some services in which
              I am expert.
            </p>
            {user ? (
              <Link to="/services">
                <button className="btn btn-[#FFDBC7]">Get Started</button>
              </Link>
            ) : (
              <Link to="/login">
                {' '}
                <button className="btn btn-[#FFDBC7]">Get Started</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* work part */}
      <div className="my-7">
        <div className="text-center">
          <h1 className="text-4xl font-bold border-b-2 border-[#836b5da1]">Portfolio</h1>
          <p className="tex-2xl font-medium">Here is some of my work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 ">
          <div className="design m-1">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
              alt="pic-2"
            />
          </div>

          <div className="design m-1">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
              alt="pic-1"
            />
          </div>

          <div className="design m-1">
            <img
              className="w-full"
              src="https://i.pinimg.com/originals/9b/d1/a6/9bd1a6a6c1b9eda32dbc9c3ec7acef67.jpg"
              alt="pic-3"
            />
          </div>
        </div>
        <Link to="/work" className="flex justify-around">
          <button className="btn btn-[#FFDBC7] ">View More</button>
        </Link>
      </div>

      {/* home service part */}
      <HomeService></HomeService>
    </div>
  );
};

export default Home;
