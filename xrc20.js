import axios from 'axios';

const main = async () => {
  // const { data } = await axios.get(
  //   'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  //   {
  //     timeout: 10000,
  //   },
  // );
  const res = await axios.get(
    'https://api.twitscription.xyz/orders?tick=X&filled=false&limit=100000',
  );
  const listingData = res.data.data;
  const totalList = listingData.length;
  listingData.forEach(listing => {
    listing.pricePerInscription = Number(listing.pricePerAmt) * 2000;
    // listing.pricePerInscriptionInUSD = listing.pricePerInscription * ethPrice;
  });
  const floorPrice = Math.min(
    ...listingData.map(listing => listing.pricePerInscription),
  );
  // const floorPriceInUSD = Math.min(
  //   ...listingData.map(listing => listing.pricePerInscriptionInUSD),
  // );
  console.log(totalList, floorPrice);
};
main();
