import ContractABI from './Ebay.json'
import Web3 from 'web3'

export const address = "0xAb5dbe761243D5311E56E110267503c4f87AfB3C"

export const createContract = () => {
  const { ethereum } = window
  if (ethereum) {
    const web3 = new Web3(ethereum)
    return new web3.eth.Contract(ContractABI.abi, address)
  }
}

export const modalStyles = {
  content: {
    height: 'fit-content',
    width: 'fit-content',
    margin: 'auto',
    marginTop: '10px',
    display: 'flex',
    padding: '0px',
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0 / 74%)',
  },
}
