import {useState} from 'react'
import axios from 'axios'
import Link from 'next/link';

const Slug = ({data, addtoCart}) => {
  const [qty, setQty] = useState(1);

  const updateCart = () => {
    const item = {
      id: Math.random(),
      slug: data.attributes.slug,
      category: data.attributes.category,
      title: data.attributes.title,
      price: data.attributes.price,
      image: `http://127.0.0.1:1337${data.attributes.image.data[0].attributes.url}`,
    };
    addtoCart(item, qty);
  };
  return (
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={`http://127.0.0.1:1337${data.attributes.image.data[0].attributes.url}`}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {data.attributes.category.toUpperCase()}
            </h2>
            <h1 className=" text-black text-3xl title-font font-medium mb-1">
              {data.attributes.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl  text-black">
                Rs. {data.attributes.price}
              </span>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Quantity</span>
                <div className="relative">
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="w-12 pl-2 text-center outline-none ring-2 ring-blue-700 focus:ring-yellow-400 text-black rounded-md"
                  />
                </div>
              </div>
              <button 
              onClick={updateCart}
              className="flex ml-auto  text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black  rounded">
                Add to Cart
              </button>
              <Link href={"/cart"} className="flex ml-auto  text-black bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 pb-24 mx-auto">
        <h1 className="text-3xl font-medium title-font  text-black mb-12 text-center">
          Description
        </h1>
        <div className="flex flex-wrap -m-4">
          <p className="leading-relaxed">{data.attributes.description}</p>
        </div>
      </div>
    </section>
  );
}


export async function getServerSideProps(context) {
  const res = await axios.get(
    `http://127.0.0.1:1337/api/products?populate=*&filters[slug]=${context.query.slug}`
  );
  const data = await res.data;
  return {
    props: {
      data:data.data[0]
    },
  };
}

export default Slug