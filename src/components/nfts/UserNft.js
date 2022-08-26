import Nft from "./Nft"
import './UserNft.css'

export default function UserNft() {
  return (
    <>
      <h1 className='user-nft-title'>My NFTs</h1>
      <div className='user-nft'>
        <div className='user-nft-row'>
          <Nft status={false}/>
          <Nft status={false} />
          <Nft status={false} />
          <Nft status={false} />
          <Nft status={false} />
          <Nft status={false} />
        </div>
      </div>
    </>
  )
}
