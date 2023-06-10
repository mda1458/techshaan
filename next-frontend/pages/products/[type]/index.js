import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Products = ({data}) => {
    const [products, setProducts] = useState([])
    const router = useRouter();
    const { type } = router.query;

    useEffect(() => {
        setProducts(data.data)
    }, [data])

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2  text-black">
          {type.toUpperCase()}
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
      </div>
      {products.length === 0 ? (
        <div className="flex justify-center items-center">
          <img
            src="https://www.bagbazaars.com/assets/img/no-product-found.png"
            alt="No Products Found"
            height="230px"
          />
        </div>
      ) : (
        <section className=" text-black body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                  <Link
                    href={`${type}/${product.attributes.slug}`}
                    class="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center con w-full h-full block"
                      src={`http://127.0.0.1:1337${product.attributes.image.data[0].attributes.url}`}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className=" text-black text-xs tracking-widest title-font mb-1">
                      {product.attributes.category.toUpperCase()}
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
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(
    `http://127.0.0.1:1337/api/products?populate=*&filters[category][$eq]=${context.query.type}`
  );
  const data = await res.data;
  return {
    props: {
      data,
    },
  };
}
export default Products;
