import Day from '../assets/bg.jpg';

export const Weather = () => {
    return (
        <div 
        className="w-screen h-screen flex flex-col justify-center items-center"
        style={{ 
            backgroundImage: `url(${Day})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: 'brightness(0.9)'  // Adjust the brightness value as needed
        }}
    >
            <div className="w-[70rem] h-[18rem] mt-10 backdrop-blur-sm bg-white/15 rounded-xl shadow-2xl flex justify-between ">
                <div className='flex flex-col right-30 ml-20 mt-14 gap-10 '>
                    <h1 className="text-4xl text-white font-bold">New York</h1>
                    <h1 className="text-6xl font-bold text-center text-yellow-400">25°C <span className='text-3xl text-white'>Overcast</span></h1>
                </div>
                <div>
                    <h1 className="text-2xl text-white font-bold text-center">Sunny</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[34rem] h-56 m-5 backdrop-blur-sm bg-white/15 rounded-xl shadow-2xl  '>

                </div>
                <div className='w-[34rem] h-56 m-5 backdrop-blur-sm bg-white/15 rounded-xl shadow-2xl'>

                </div>
            </div>
        </div>
    );
}
