import '../styles/globals.css'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'cdbd18f9f96172be74c3e351ce99b908'

// 2. Set chains

// // Defualt config
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// // 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
    ethersConfig: defaultConfig({
        metadata,
    defaultChainId: 1,
    }),
    chains: [mainnet],
    projectId,
})

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp