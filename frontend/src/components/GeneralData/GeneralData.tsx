import React from 'react'
import './GeneralData.scss'
import lineUp from '../../assets/images/trending-up-line.svg'

const GeneralData = () => {
    return (
        <div className="GeneralData">
            <div className="container">
                <div className="GeneralData-content">
                    <div className="title">
                        <img className='lineUp' src={lineUp} alt="" />
                        <h1 className='GeneralData-name'>Stock Monitoring and Prediction</h1>
                    </div>
                    <div className="row">
                        <div className="block">
                        <div className="block-data">
                            <div className="block-data-name">
                                <h3>Average growth</h3>
                            </div>
                        </div>
                        </div>
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralData