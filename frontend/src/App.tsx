import React from 'react'
import './App.scss'
import GeneralData from './components/GeneralData/GeneralData'
import StockList from './components/StockList/StockList'

const App = () => {
    return (
        <>
            <GeneralData />
            <StockList />
        </>
    )
}

export default App