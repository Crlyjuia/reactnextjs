import Image from "next/image";

export default function Home() {
  return (

    <div className="min-h-screen bg-white text-black">
      <header className="text-center py-8 text-2xl font-bold">
        <h1 className="text-5xl">Painting</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="py-8">
            <Image 
              src="/img/header.svg" 
              alt="Header Painting" 
              width={500} 
              height={200} 
              priority
            />
          </div>
          <div className="pt-20 pb-0">
            <Image 
              src="/img/icon2.svg" 
              alt="Icon 2" 
              width={100} 
              height={100} 
            />
          </div>
        </div>
      </header>

      <div className="text-center px-4">
        <h2 className="font-bold text-xl pb-5 pt-0">psum consequat</h2>
        <h3 className="text-gray-500 opacity-60 max-w-2xl mx-auto">
          Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus
        </h3>
        <hr className="sm:mx-15 my-6 border-t border-gray-200" />
      </div>

      <div className="flex justify-center pt-11">
        <Image 
          src="/img/icon3.svg" 
          alt="Icon 3" 
          width={80} 
          height={80} 
        />
      </div>

      <div className="text-center px-4">
        <h2 className="font-bold text-xl pb-5 pt-8">Magna etiam dolor</h2>
        <h3 className="text-gray-500 opacity-60 max-w-2xl mx-auto">
          Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus
        </h3>
        <hr className="sm:mx-15 my-6 border-t border-gray-200" />
      </div>

      <div className="flex justify-center pt-11">
        <Image 
          src="/img/icon1.svg" 
          alt="Icon 1" 
          width={80} 
          height={80} 
        />
      </div>

      <div className="text-center px-4 flex flex-col items-center">
        <h2 className="font-bold text-xl pb-5 pt-8">Tempus adipiscing</h2>
        <h3 className="text-gray-500 opacity-60 pb-20 max-w-2xl">
          Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus
        </h3>
      </div>

      <div className="w-full flex justify-center pb-12 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center w-full max-w-md">
          <button className="bg-red-800 rounded-sm px-5 py-3 text-white font-bold w-full md:w-60 hover:bg-red-900 transition-colors cursor-pointer">
            Get started
          </button>
          <button className="bg-black text-white rounded-sm px-5 py-3 font-bold w-full md:w-60 hover:bg-gray-900 transition-colors cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

 
