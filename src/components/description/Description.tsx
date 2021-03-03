import React from 'react';
import './Description.css'
const Description: React.FunctionComponent = () => {
    return (
        <div className="card">
            <div className="card-title">REACT PHP developer</div>
            <div className="card-content">
                <div className="card-content-item">Develop React APP with mongoDB and nodeJS</div>
                <div className="card-content-item">Develop jQUERY as frontend and PHP as SLIM framework as backend</div>
                <div className="card-link">
                    <a className="card-link-item" href='abc'>Github</a>
                    <a className="card-link-item" href='def'>Twitter</a>
                </div>
            </div>
        </div>
    )
};

export default Description;