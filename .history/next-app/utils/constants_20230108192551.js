import ContractABI from './Ebay.json'
import Web3 from 'web3'

//export const address = "0xB5D560Df95565279683e7E012A82EF2Ca48e8539" // Ganache Goerli
export const address = "0x626828CBD2A4fe3CF2BA0F20597636C38Da75e2A" // Infur Goerli

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
