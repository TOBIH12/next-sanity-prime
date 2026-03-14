import NavBar from "../navBar"
import ServiceHeroText from "./ServiceHeroText";

const Services = () => {
  return (
    <div className='min-h-[80vh] mb-4 bg-cover bg-center items-center flex w-full overflow-hidden' style={{ backgroundImage: `url('/services.jpg')`, backgroundColor: `rgb(64, 63, 71)`, backgroundBlendMode: `overlay` }}>
       <NavBar header={'/#Header'} about={'/#About'} projects={'/#Projects'} testimonials={'/#Testimonials'} />
       <ServiceHeroText />
    </div>
  )
}

export default Services;
