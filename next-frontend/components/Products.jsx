import Link from 'next/link';
import axios from 'axios';

const Products = (props) => {
    console.log(props.data);
    return (
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            {props.name.toUpperCase()}
          </h1>
          <div className="h-1 w-20 bg-yellow-500 rounded"></div>
        </div>
        <section className="text-white body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link
                  href={`${props.name}/p`}
                  class="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-white text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-yellow-500 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export async function getStaticProps({params}) {
    
    const res = await axios.get(
      `http://localhost:1337/api/products?filters[category][$eq]=${props.name}`
    );
    const data = await res.data;
    console.log(data);
    return {
      props: {
        data: data,
      },
    };
  }

export default Products