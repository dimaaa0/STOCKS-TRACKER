import { useState } from 'react'
import '../../components/StockList/StockList.scss'
import search from '../../assets/images/search.svg'
import swap from '../../assets/images/arrow-down-up.svg'


const StockList = () => {

    const [hovered, setHovered] = useState(false)

    const [stockList, setStockList] = useState([
        {
            favourites: false,
            symbol: 'AAPL',
            name: 'Apple Inc.',
            category: 'Technology',
            price: 195,
            change: 2.34,
            percent: 1.21,
            volume: 52.43
        },
        {
            favourites: false,
            symbol: 'MSFT',
            name: 'Microsoft corporation',
            category: 'Technology',
            price: 378,
            change: -1.23,
            percent: -0.32,
            volume: 23.42
        }
    ]);

    const handleSwapHeader = (i) => {
        setHovered(true);
        console.log(i);
        
    };

    const handleCancelSwapHeader = (i) => {
        setHovered(false);
    };


    return (
        <div className="StockData">
            <div className="container">
                <div className="StockData-content">

                    <div className="filter">
                        <div className="filter-name">
                            <div className="line"></div>
                            <h3>Filters</h3>
                        </div>
                        <div className="inputs">

                            <div className="block search">
                                <img src={search} alt="" />
                                <input placeholder='Search by name or symbol' type="text" />
                            </div>

                            <div className=" block category">

                                <select name="" id="">
                                    <option value="">All Categoriea</option>
                                    <option value="">Technology</option>
                                    <option value="">Finance</option>
                                    <option value="">Retail</option>
                                    <option value="">Automotive</option>
                                    <option value="">Entertainment</option>
                                </select>
                            </div>

                            <div className="block stocks">
                                <select name="" id="">
                                    <option value="">All Stocks</option>
                                    <option value="all">Growing</option>
                                    <option value="">Falling</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="stockList">
                        <div className="stockList-content">
                            <div className="stockList-content-name">
                                <h3 className='actions' id='1'
                                    onMouseEnter={handleSwapHeader}
                                    onMouseLeave={handleCancelSwapHeader}
                                >
                                    Actions <img
                                        src={swap}
                                        alt=""
                                        style={{
                                            display: hovered ? 'block' : 'none'
                                        }}
                                    /></h3>
                                <h3 className="symbols" id='2'
                                    onMouseEnter={handleSwapHeader}
                                    onMouseLeave={handleCancelSwapHeader}
                                >Symbols  <img
                                        src={swap}
                                        alt=""
                                        style={{
                                            display: hovered ? 'block' : 'none'
                                        }}
                                    /> </h3>
                                <h3 className="name">Name</h3>
                                <h3 className="category">Category</h3>
                                <h3 className="price">Price</h3>
                                <h3 className="change">Change</h3>
                                <h3 className="volume">Volume</h3>
                            </div>
                            <div className="stockList-content-list">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockList