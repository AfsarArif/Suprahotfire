const { PinataSDK } = require("pinata")
require("dotenv").config() //might have to add {path: 'relative-path' depending on where you put it} the relative path being where .env is

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.GATEWAY_URL
})

async function main() {
  try {
    const file = await pinata.gateways.get("bafkreifw2spqtdt5box5aktndaaoolsfnk3pqb3mhmggz4kcrdlrnvuy4a")
    console.log(file.data)
  } catch (error) {
    console.log(error);
  }
}

main()