import React from "react";

const ScholarshipCard = (props) => {

    return (
        <div className="card">
            <img className='company-img' src={props.img} alt="Internship Image"></img>
            <h3>{props.type}</h3>
            <h4>{props.time}</h4>
            <h5>Deadline: {props.dead}</h5>
            <a href={props.link} className="button" target="_blank">Apply Now!</a>
        </div>
    )
};

export default ScholarshipCard;