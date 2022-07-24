//<script>

// R8CQVTYGCWTMHG731CAHUQ5YSYT1I22G68 API key
// 0x0049d29bf24aeda8dc8a23cc1fe4176b92f16f7e TCU token
// 0x9bc9c90dc29e6cea73f4af9a1125bdb5025008ac TCU Liquidity Pool.
// 0xb8c77482e45f1f44de1745f52c74426c631bdd52 BNB token 18 decimals.
// 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c WBNB token 18 decimals

const api_url = 'https://api.coingecko.com/api/v3/ping';
const TCUtotalSupply = 'https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0x0049d29bf24aeda8dc8a23cc1fe4176b92f16f7e&apikey=R8CQVTYGCWTMHG731CAHUQ5YSYT1I22G68';

// check the balance of TCU on TCU Liquidity Pool
const apibal_TCU_onTCU_pool = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x0049d29bf24aeda8dc8a23cc1fe4176b92f16f7e&address=0x9bc9c90dc29e6cea73f4af9a1125bdb5025008ac&tag=latest&apikey=R8CQVTYGCWTMHG731CAHUQ5YSYT1I22G68';

// check the balance of WBNB on TCU Liquidity Pool
const apibal_WBNB_onTCU_pool = 'https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=0x9bc9c90dc29e6cea73f4af9a1125bdb5025008ac&tag=latest&apikey=R8CQVTYGCWTMHG731CAHUQ5YSYT1I22G68';

// BNB price
const apiBNBUSD = 'https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=R8CQVTYGCWTMHG731CAHUQ5YSYT1I22G68';

// TestOnly
async function getBNBUSD(){
    const response = await fetch(apiBNBUSD);
    const dataBNBUSD = await response.json();
    const { result } = dataBNBUSD;
    console.log(dataBNBUSD);
    document.getElementById('ethusd').textContent = result.ethusd;
    priceBNBUSD = result.ethusd;
    }
getBNBUSD();

async function getBal_TCU_onTCU_pool(){
    const response = await fetch(apibal_TCU_onTCU_pool);
    const DATAbal_TCU_onTCU_pool = await response.json();
    const { result } = DATAbal_TCU_onTCU_pool;
    console.log(DATAbal_TCU_onTCU_pool);
    qtdTCUonTCUpool = result;
    document.getElementById('Bal_TCU_onTCU_pool').textContent = result / 100000;

}
getBal_TCU_onTCU_pool();

async function getTCUUSD(){
    const response = await fetch(apibal_WBNB_onTCU_pool);
    const DATAbal_WBNB_onTCU_pool = await response.json();
    const { result } = DATAbal_WBNB_onTCU_pool;
    console.log(DATAbal_WBNB_onTCU_pool);
    test = parseFloat(result / 10000000000000 * priceBNBUSD / qtdTCUonTCUpool).toFixed(10);
    document.getElementById('PriceTCUUSD').textContent = test;// 8180535.86497 = TCUonPOOL
}
getTCUUSD();

// TestOnly
async function getHello(){
    const response = await fetch(api_url);
    const data0 = await response.json();
    const { gecko_says } = data0;
    console.log(data0);
    document.getElementById('text').textContent = gecko_says;
}
getHello();

async function getTCUtotalSupply(){
    const response = await fetch(TCUtotalSupply);
    const dataTCU1 = await response.json();
    const { result } = dataTCU1;
    console.log(dataTCU1);
    var x = result / 100000;
    document.getElementById('TCUtotalSupply').textContent = x; // 100000; // number of decimals (needs to be fixed)
}
getTCUtotalSupply();

//</script>

//<body>

//<h5>$ <span id="text"</span></h5>
//<h5>$ <span id="TCUtotalSupply"</span></h5>
//<h5>$ <span id="ethusd"</span></h5>
//<h5>$ <span id="Bal_TCU_onTCU_pool" </span></h5>
//<h5>$ <span id="PriceTCUUSD"</span></h5>
//</body>
