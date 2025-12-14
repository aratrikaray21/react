import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="job-card">
                {/* Top section */}
                <div className="job-card-header">
                    <img
                        src={props.image}
                        alt={props.jobTitle}
                        className="company-logo"
                    />
                    <button className="save-btn">☆ Save</button>
                </div>

                {/* Job details */}
                <div className="job-card-body">
                    <h3 className="job-title">{props.jobTitle}</h3>
                    <p className="company-name">{props.company}</p>
                    <p className="job-location">{props.location}</p>

                    <div className="badges">
                        <span className="badge full-time">{props.type}</span>
                    </div>

                    <p className="pay">${props.pay}/ hour</p>
                </div>

                {/* Footer */}
                <div className="job-card-footer">
                    <button className="apply-btn">Apply Now</button>
                </div>
            </div>
        </>
    )
}

export default Card