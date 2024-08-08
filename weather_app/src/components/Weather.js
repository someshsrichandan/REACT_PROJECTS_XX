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
            <div className="w-[70rem] h-[18rem] mt-10 backdrop-blur-sm bg-white/15 rounded-xl shadow-2xl ">
                xvdfvfjk
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
