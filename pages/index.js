import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react'

export default function Home() {
  const { open } = useWeb3Modal()
  const { walletProvider } = useWeb3ModalProvider()
  const { chainId, address } = useWeb3ModalAccount()
  useEffect(()=>{
    console.log("Provider: ", walletProvider)
    console.log("chain id: ", chainId, "address: ", address)
  },[walletProvider])

  return (
    <div className={styles.container}>
      <button onClick={open} >Open Modal</button>
    </div>
  )
}
