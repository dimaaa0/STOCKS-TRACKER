import React from 'react'
import './GeneralData.scss'
import lineUp from '../../assets/images/trending-up-line.svg'
import trend from '../../assets/images/trend.svg'
import trendUp from '../../assets/images/trend-up.svg'
import trendDowny from '../../assets/images/trend-downy.svg'

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
                        <div className="block average">
                            <div className="block-data">
                                <div className="block-data-name">
                                    <h3>Average Growth</h3>
                                    <img src={trend} alt="" />
                                </div>
                                <div className="block-data-amount">
                                    <h1>+15.6%</h1>
                                </div>
                            </div>
                        </div>
                        <div className="block growth">
                            <div className="block-data">
                                <div className="block-data-name">
                                    <h3>Growing Stocks</h3>
                                    <img src={trendUp} alt="" />
                                </div>
                                <div className="block-data-amount">
                                    <h1>2/12</h1>
                                </div>
                            </div>
                        </div>
                        <div className="block falling">
                            <div className="block-data">
                                <div className="block-data-name">
                                    <h3>Falling Stocks</h3>
                                    <img src={trendDowny} alt="" />
                                </div>
                                <div className="block-data-amount">
                                    <h1>10/12</h1>
                                </div>
                            </div>
                        </div>
                        <div className="block total">
                            <div className="block-data">
                                <div className="block-data-name">
                                    <h3>Total Volume</h3>
                                    <h1 className='img'>$</h1>
                                </div>
                                <div className="block-data-amount">
                                    <h1>0.35B</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralData