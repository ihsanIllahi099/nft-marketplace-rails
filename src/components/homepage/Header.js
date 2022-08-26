import axios from "axios"

export default function Header() {
  const createContract = e => {
    e.preventDefault();
    const bodyParams = JSON.stringify({
      'key': 'ZH0fvDd2zpD5ljCaMhxRyEMwTTnBPXyk',
      'chain_id': 80001,
      'name': 'Devsinc',
      'short_name': 'devi',
      'webhook_url': 'https://84bb-103-125-178-229.ap.ngrok.io/contracts',
      "redirect_url": "https://www.google.com"
    });
    axios.post('/api/nfts/contract', bodyParams, {"headers": {
      "content-type": "application/json"
      }}).then(function (response) {
        console.log(response.data);
        window.location.assign(response.data.transaction_url);
      }).catch(function (error) {
        console.log(error);
    });
  }
  return (
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">NFT MARKETPLACE</a>
      <div class="d-flex flex-row">
        <a class="nav-link active text-light m-3" aria-current="page" href="/">Marketplace</a>
        <a class="nav-link active text-light m-3" aria-current="page" href="/mint">Mint</a>
        <a class="nav-link active text-light m-3" aria-current="page" href="/my-nfts">My Nfts</a>
        <button class="btn btn-warning p-1" onClick={createContract}>Create Contract</button>
      </div>
    </div>
  </nav>
  )
}
