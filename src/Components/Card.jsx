import React, { useState, useEffect } from 'react';

export default function Card ()  {

  return (
    <>
      <div className="container p-2">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
