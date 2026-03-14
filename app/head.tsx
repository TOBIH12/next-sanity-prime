import NavBar from "./navBar";
import HeroSection from "./heroSection";


const Head = () => {
  return (
   <div className='min-h-screen mb-4 bg-cover bg-center items-center flex w-full overflow-hidden' style={{ backgroundImage: `url('/kitchenBG.jpg')`, backgroundColor: `rgb(64, 63, 71)`, backgroundBlendMode: `overlay` }} id='Header'>
        <NavBar header={'#Header'} about={'#About'} projects={'#Projects'} testimonials={'#Testimonials'} />
        <HeroSection />
    </div>
  )
}

export default Head;
