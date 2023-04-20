// import images
import womanImage from '../images/woman.jpg'


const Hero = () => {
  return (
    <section className="bg-gray-200 h-[800px] bg-no-repeat bg-cover bg-center py-24 lg:grid-cols-2">
      <div className="container mx-auto flex items-center justify-center h-full">
        {/* text */}
        <div className='flex flex-col mr-10 justify-center'>
            <div className='font-semibold flex items-center uppercase'>
                <div className='w-10 h-[2px] bg-red-400 mr-3'></div>New Trend
            </div>
            <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
              AUTUMN SALE STYLISH <br />
              <span className='font-semibold'>WOMENS</span>
            </h1>
          {/* image */} 
        </div>
            <div className='w-[300px]'>
              <img src={womanImage} alt='' />
            </div>
      </div>
    </section>
  )
}

export default Hero