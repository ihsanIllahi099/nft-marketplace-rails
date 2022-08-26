import React from 'react'
import Nft from '../nfts/Nft'
import './Home.css'

export default function Home() {
  return (
    <>
      <h1 className='home-text'>NFT MARKETPLACE</h1>
      <div className='home'>
        <div className='home-row'>
          <Nft status={true} />
          <Nft status={true} />
          <Nft status={true} />
          <Nft status={true} />
          <Nft status={true} />
          <Nft status={true} />
        </div>
      </div>
    </>
  )
}
