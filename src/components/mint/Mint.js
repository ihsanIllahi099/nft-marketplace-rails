import { useState, useEffect } from 'react';
import axios from 'axios';
import './Mint.css';

export default function Mint() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contract, setContract] = useState('');

  const createMintNft = e => {
    e.preventDefault();
    const bodyParams = JSON.stringify({
      "key": "ZH0fvDd2zpD5ljCaMhxRyEMwTTnBPXyk",
      "chain_id": 80001,
      "contract": contract.contract_address,
      "nft_id": 12,
      "nft_data": "Love me like you do",
      "to":  "0x97e5574b4495AcB9a855dcEC87e9137b76A405e2",
      "webhook_url": "https://54dc-103-125-178-229.in.ngrok.io/mint_nft",
      "redirect_url": "https://www.google.com"
  })
    axios.post('https://thentic.tech/api/nfts/mint', bodyParams, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(function (response) {
      console.log(response.data);
      window.location.assign(response.data.transaction_url);
    }).catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    axios.get('http://localhost:3000/latest-contract',{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function (response) {
      console.log(response.data.contract_address);
      setContract(response.data);
    });
  }, []);

  return (
    <div className='mint'>
      <div className="mint-container">
        <h1 class="mb-5"><u>Register NFT here</u></h1>
        <form>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Name</span>
            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" required value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Description</span>
            <input type="text" class="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon1" required value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <div class="mb-3">
            <input class="form-control" type="file" id="formFile"  />
          </div>
          <br />
          <div class="input-group mb-3">
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox" placeholder='Accept Terms and conditions' disabled/>
          </div>
          <button type="submit" onClick={createMintNft} className="register-btn">Register Your NFT</button>
        </form>
      </div>
    </div>
  )
}
