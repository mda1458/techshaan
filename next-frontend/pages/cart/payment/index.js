import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const Payment = ({ cart, rate }) => {
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const paymentSuccess = (details) => {
    console.log(details);
  };

  const paymentError = (err) => {
    console.log(err);
  };

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      router.push("/login");
    } else if (cart.length === 0) {
      router.push("/");
    }
    setTotal(Number(cart.reduce((a, b) => a + b.price * b.quantity, 0)));
  }, [cart, total]);
  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-14 items-center px-4 md:my-[2.8rem]">
      <div className="flex w-96 h-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl">
        <div className="mx-auto mb-2 space-y-3 gap-2">
          <h1 className=" text-3xl text-center font-bold text-blue-700">
            Bill Details
          </h1>
          <div className="flex flex-col justify-between gap-2">
            <div className="overflow-auto h-56 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="flex w-full flex-col px-4 py-4">
                  <span className="font-medium">{item.title.slice(0, 35)}</span>
                  <span className=" text-white">Quantity: {item.quantity}</span>
                  <p className="mt-auto text-yellow-500">{`${
                    item.quantity
                  } x Rs. ${item.price} = Rs. ${
                    item.quantity * item.price
                  }`}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Total</h1>
              <h1 className="text-xl font-bold">Rs. {total}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-96 h-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl">
        <div className="mx-auto mb-2 space-y-3">
          <h1 className=" text-3xl text-center font-bold text-blue-700">
            Payment Method
          </h1>
          <div className="flex justify-center">
            <PayPalScriptProvider
              options={{
                "client-id":
                  "ATsy2K3va3Heqtl4-XzZP8hWiiIF6w178J4ecoFimfIROHZXLqTRFNlVn9BdrlqVvFVqyQzZopHTLH7j",
              }}
            >
              <PayPalButtons
                className="w-full my-12"
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: (total * rate).toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    // Handle the payment success
                    paymentSuccess(details);
                  });
                }}
                onError={(err) => {
                  // Handle the payment error

                  paymentError(err);
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    "http://data.fixer.io/api/latest?access_key=ce52c17ce33ebd86c6a7a42028c93f56&symbols=PKR,USD"
  );
  let rate1 = await res.data.rates.USD;
  let rate2 = await res.data.rates.PKR;
  return {
    props: {
      rate: rate1 / rate2,
    },
  };
}

export default Payment;
