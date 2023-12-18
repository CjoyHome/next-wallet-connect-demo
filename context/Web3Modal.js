
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'xxxx'
const rpc = 'xxxx'
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
        rpcUrl: rpc
    }),
    chains: [mainnet],
    projectId,
    enableAnalytics: true
})

  
export function Web3ModalProvider({ children }) {
    return children;
}