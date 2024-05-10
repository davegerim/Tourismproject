import React from 'react'
import QRCode from "qrcode.react";

function Payment({
  showQRCode,
  toggleQRCode,
  firstname,
  email,
  amount,
  tx_ref,
  public_key,
}) {
  return (
    <div className="flex justify-center items-center ">
      {showQRCode && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
            <input type="hidden" name="public_key" value={public_key} />
            <input type="hidden" name="tx_ref" value={tx_ref} />
            <input type="hidden" name="amount" value={amount} />
            <input type="hidden" name="currency" value="ETB" />
            <input type="hidden" name="email" value={email} />
            <input type="hidden" name="first_name" value={firstname} />
            <input type="hidden" name="last_name" value={firstname} />
            <input type="hidden" name="title" value="Let us do this" />
            <input
              type="hidden"
              name="description"
              value="Paying with Confidence with cha"
            />
            <input
              type="hidden"
              name="logo"
              value="https://chapa.link/asset/images/chapa_swirl.svg"
            />
            <input
              type="hidden"
              name="callback_url"
              value="https://api.chapa.co/v1/transaction/initialize"
            />
            <input
              type="hidden"
              name="return_url"
              value="http://localhost:3001/hotel"
            />
            <input type="hidden" name="meta[title]" value="test" />

            <div className="bg-white p-8 rounded shadow-lg">
              <div className="text-center mb-4">
                <p className="text-lg font-semibold">Scan QR Code</p>
              </div>
              <div className="flex justify-center">
                <QRCode
                  value="https://checkout.chapa.co/checkout/payment/8kSV0ALm3eL2CpYqSGWFCxDgAOyqLSqvT7rw4zNvrsg54"
                  size={200}
                />
              </div>
              <button
                type="submit"
                class="w-full py-1 flex justify-center bg-gradient-to-r from-green-900 to-green-900  hover:bg-gradient-to-l hover:from-green-800 hover:to-green-800 text-gray-100 mt-4  rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Pay Now
              </button>
              <div className="mt-4 text-center">
                <button className=" border-b-2 border-b-green-800 text-slate-700 hover:bg-slate-800 hover:text-white  px-6 rounded">
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Payment