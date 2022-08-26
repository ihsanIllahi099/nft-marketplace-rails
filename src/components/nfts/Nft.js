import React from 'react'

export default function Nft(props) {
  return (
    <div class="card-columns mb-3">
      <div class="card">
        <img src="https://lh3.googleusercontent.com/-g5FUGtgB6O7efOQC1KQ89OmznXxTrLh4miErocdZ7r9mLrK3nTY8K68lhM0K8Qds9drwB8qGjk9MxLNrKhFSy4YPq2FP7x5NJDieA=w600" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Monkey NFT</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          {
            props.status === true ? <button btn class='nfy-button'>Buy now</button> : <button class='nft-button'>Sell now</button>
          }
        </div>
      </div>
    </div>
  )
}
