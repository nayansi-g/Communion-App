import { useNavigate } from "react-router-dom";
import image1 from "../assets/event-1.avif";
import image2 from "../assets/event-2.webp";
import image3 from "../assets/event-3.avif";
import image4 from "../assets/images.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white p-5 lg:p-10">
      <div className="flex flex-col justify-center items-center p-5 lg:p-10 text-center">
  <h1 style={{ fontWeight: 1000 }} className="text-xl sm:text-3xl lg:text-5xl">
    Connecting People Across Faiths & Interests
  </h1>
  <p className="mt-2 sm:mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
    Connecting people of all faiths through events and community support.
  </p>
</div>


     
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-8 lg:mt-16 gap-5">
      
        <div className="lg:w-1/2 flex flex-col items-center  lg:items-start text-center lg:text-left p-5">
          <h1 className=" text-xl sm:text-3xl lg:text-4xl font-bold">Unite, Innovate,</h1>
          <h1 className=" text-xl sm:text-3xl lg:text-4xl font-bold">Connect, Inspire</h1>
          <h1 className=" text-xl sm:text-3xl lg:text-4xl font-bold">Together</h1>
          <p className="text-gray-700 mt-4">
            Join us to be part of a community where spirituality meets innovation. Together, we'll
            build a world that's more inclusive, engaging, and connected than ever before!
          </p>
          <button
            onClick={() => navigate("/events")}
            className="mt-6 bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-2 text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105"
          >
            Explore Events <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

      
        <div className="flex flex-wrap justify-center gap-5 w-full lg:w-1/2">
         <div className="flex flex-col gap-5">
         <img
            className="sm:rounded-full h-48 w-48 object-cover transition-all duration-300 hover:scale-110"
            src={image1}
            alt="Event 1"
          />
          <img
            className="sm:rounded-full h-48 w-48 object-cover transition-all duration-300 hover:scale-110"
            src={image2}
            alt="Event 2"
          />
         </div>
         <div className="flex flex-col gap-5">
         <img
            className="sm:rounded-full h-48 w-48 object-cover transition-all duration-300 hover:scale-110"
            src={image3}
            alt="Event 3"
          />
            <img
            className="sm:rounded-full h-48 w-48 object-cover transition-all duration-300 hover:scale-110"
            src={image4}
            alt="Event 4"
          />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
