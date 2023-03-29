import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachItem

  return (
    <li className="sub-head-container">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-sub-container">
        <p className="currency-name currency-usd">{usdValue}</p>
        <p className="currency-name currency-usd">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
