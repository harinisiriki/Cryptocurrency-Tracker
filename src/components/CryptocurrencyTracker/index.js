import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formateData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({
      cryptoList: formateData,
      isLoading: false,
    })
  }

  render() {
    const {cryptoList, isLoading} = this.state
    const loadingStyle = isLoading ? 'loading main-container' : 'main-container'

    return (
      <div className={`${loadingStyle}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoList={cryptoList} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
