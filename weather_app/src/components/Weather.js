import Day from '../assets/bg.jpg';

export const Weather = () => {
    return (
        <div 
        className="w-screen h-screen flex flex-row justify-center"
        style={{ 
            backgroundImage: `url(${Day})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            filter: 'brightness(0.9)'  // Adjust the brightness value as needed
        }}
    >
            <div className="w-[70rem] h-52 m-20 backdrop-blur-sm bg-white/15 rounded-xl shadow-2xl ">
                xvdfvfjk
            </div>
        </div>
    );
}
