import Link from 'next/link'

const Home = ({users}) => {
    const usersList = users.map(user =>{
        return(
            <>
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src={user.mediaurl} alt="Neil image" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{user.name}</p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">{user.phone}</p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{user.id}</div> 
                        </div>
                    </li>
                </ul>
            </>
            
        ) 
    })
    return(
        <div className="flex flex-row justify-center pt-10"> 
            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Customers List</h5>
                    </div>
                    <div class="flow-root">
                        {usersList}
                        <div className="flex items-center">
                                <Link href={'/addCustomer'} legacyBehavior><a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Customer</a></Link>       
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Home

export async function getStaticProps(){
    const response = await fetch('http://localhost:3000/api/userList')
    const data = await response.json()
    return {
        props:{
            users: data
        }
    }
}