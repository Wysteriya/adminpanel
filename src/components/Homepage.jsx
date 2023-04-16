const HomePage = () => {
    return (<body class="text-gray-700 bg-blue-100 antialiased" >

        <nav class="flex items-center justify-between flex-wrap p-6 bg-blue-400">

            <div class="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
                <span class="font-semibold text-xl tracking-tight hover:text-green-800"><a href="/">Team Wysteria</a></span>
            </div>

            <div class="block lg:hidden">
                <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div id="nav-content" class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  pt-6 lg:pt-0 md:text-right">
                <div class="text-sm lg:flex-grow">
                    <a href="/login" class="bg-blue-100 block mt-1 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4 text-2xl" >ADMIN LOGIN</a>
                </div>
            </div>

        </nav>
       
        <section class="container mx-auto px-6 p-10">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Insurego</h2>
            <div class="flex items-center flex-wrap mb-20">
                <div class="w-full md:w-1/2 pr-10">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">Kindly check out our mobile app here: </h4>
                    <a href="https://drive.google.com/drive/folders/1SWBsYPjlVrElg5UF35EuL4aqSFfd8iak?usp=sharing" class="bg-pink-100 block mt-1 lg:inline-block lg:mt-0 text-dark-200 hover:text-teal-800 mr-4 text-2xl" >APP LINK</a>
                </div>
                <div class="w-full md:w-1/2">
                    <img class="rounded-lg w-60" src="https://iili.io/Hvw2XV4.png"  alt="Vortex" />
                </div>
            </div>
            <div class="flex items-center flex-wrap mb-20">
                <div class="w-full md:w-1/2">
                    <img class="rounded-lg" src="https://img.etimg.com/thumb/msid-69278711,width-300,height-225,imgsize-132321,,resizemode-75/home-insurance-getty.jpghttps://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg" alt="use the force" />
                </div>
                <div class="w-full md:w-1/2 pl-10">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">Insurego is a decentralized blockchain based Insurance Marketplace app</h4>
                    <p class="text-gray-600 mb-8">We bridge the transparency and trust gap in the insurance bussiness by enabling trustless blockchain based buying and selling of insurance</p>
                </div>
            </div>
            <div class="flex items-center flex-wrap mb-20">
                <div class="w-full md:w-1/2 pr-10">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">How it works</h4>
                    <p class="text-gray-600 mb-8">There is client side app which allows users to buy insurance from various providers listed in the marketplace.
                                                    The admin panel lets insurance provider to register their insurance policy.</p>
                </div>
                <div class="w-full md:w-1/2">
                    <img class="rounded-lg" src="https://cdn.pixabay.com/photo/2017/02/17/08/11/family-2073604_1280.png" alt="Syncing" />
                </div>
            </div>
        </section>   
       
    </body>)
}

export default HomePage;