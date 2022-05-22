import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
        <div>
          <h1 className="text-center">
          FLY IN YOUR <br/> OWN SKY
          </h1>
          <div className="text-center">
            <Link to="/products">
              {" "}
              <button className="btn btn-warning text-white">
                Explore Now
              </button>
            </Link>
          </div>{" "}
        </div>
      </div>
    );
};

export default Banner;