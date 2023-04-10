function productOverview({ product }) {
  const {
    id,
    name,
    price,
    description,
    mediaurl
  } = product;

  
  return (
        <div className="">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.mediaurl} />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                    <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</a>       
                </div>
            </div>
        </div> 
  )
}

export default productOverview;
