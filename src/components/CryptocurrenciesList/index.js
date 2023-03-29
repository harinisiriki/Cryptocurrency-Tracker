import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <>
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="main-img"
      />
      <div className="list-box-container">
        <div className="list-head-container">
          <p className="type">Coin Type</p>
          <div className="list-head-container list-sub-container">
            <p className="type grow usd">USD</p>
            <p className="type grow usd ">EURO</p>
          </div>
        </div>
        <ul className="ul-list-container">
          {cryptoList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default CryptocurrenciesList
