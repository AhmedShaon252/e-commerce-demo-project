import Link from 'next/link'

const Home = ({products}) => {
    const productList = products.map(product =>{
        return(
            <div className="" key={product.id}>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="p-8 rounded-t-lg h-auto max-w-xs" src={product.mediaurl} alt="product image" />
                    <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    })
    return(
        <div className="grid gap-4 grid-cols-3 grid-rows-2 place-items-center pl-2 pr-2 pt-2 pb-25"> 
            {productList}
        </div>
    )
}
export default Home

export async function getStaticProps(){
    const response = await fetch('http://localhost:3000/api/productList')
    const data = await response.json()
    return {
        props:{
            products: data
        }
    }
}