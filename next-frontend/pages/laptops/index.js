import Link from "next/link";
import axios from "axios";

const Products = ({data}) => {
    const products = data.data;
    console.log(products[1].attributes.image.data[0].attributes.url);
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Laptops
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
      </div>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                <Link
                  href={`/laptops/${product.attributes.slug}`}
                  class="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center con w-full h-full block"
                    src={`http://127.0.0.1:1337${product.attributes.image.data[0].attributes.url}`}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-white text-xs tracking-widest title-font mb-1">
                    {product.attributes.category}
                  </h3>
                  <h2 className="text-yellow-500 title-font text-lg font-medium">
                    {product.attributes.title}
                  </h2>
                  <p className="mt-1">Rs. {product.attributes.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    "http://127.0.0.1:1337/api/products?populate=*&filters[category][$eq]=laptop"
  );
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}
export default Products;
