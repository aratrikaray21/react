import React from 'react'
import style from './Card.module.css'
const Card = (props) => {
    return (
        <>
            <div className={style.jobCard}>
                {/* Top section */}
                <div className={style.jobCardHeader}>
                    <img
                        src={props.image}
                        alt={props.jobTitle}
                        className={style.companyLogo}
                    />
                    <button className={style.saveBtn}>☆ Save</button>
                </div>

                {/* Job details */}
                <div className={style.jobCardBody}>
                    <h3 className={style.jobTitle}>{props.jobTitle}</h3>
                    <p className={style.companyName}>{props.company}</p>
                    <p className={style.jobLocation}>{props.location}</p>

                    <div className={style.badges}>
                      <span className={`${style.badge} ${style.fullTime}`}>{props.type}</span>
                    </div>

                    <p className={style.pay}>${props.pay}/ hour</p>
                </div>

                {/* Footer */}
                <div className={style.jobCardFooter}>
                    <button className={style.applyBtn}>Apply Now</button>
                </div>
            </div>
        </>
    )
}

export default Card