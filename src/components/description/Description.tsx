import React from 'react';
import './Description.css'
const Description: React.FunctionComponent = () => {
    return (
        <div className="card-desc">
            <div className="card-title">REACT PHP developer</div>
            <div className="card-content">
                <div className="card-content-item">Develop <strong>React</strong> APP with <strong>mongoDB</strong> and <strong>nodeJS</strong></div>
                <div className="card-content-item">Develop <strong>jQUERY</strong> as frontend and <strong>PHP SLIM</strong> framework as backend</div>
                {/* <div className="card-link">
                    <a className="card-link-item" href='abc'>Github</a>
                    <a className="card-link-item" href='def'>Twitter</a>
                </div> */}
            </div>
        </div>
    )
};

export default Description;