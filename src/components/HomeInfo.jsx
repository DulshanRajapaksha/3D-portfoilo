import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center  bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl py-4 px-8 text-black font-semibold mx-5'>
        Hi, I'm
        <span className='font-bold font-poppins text-xl mx-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to bg-pink-600'>Navod Dulshan</span>
        👋
        <br />
        A Web Developer from Sri Lanka
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-bold sm:text-xl text-center'>
          Learned a lot from self projects <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn hover:bg-gradient-to-r from-pink-200 to-yellow-200'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-bold text-center sm:text-xl'>
          Here are some of the projects I did during this time. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn hover:bg-gradient-to-r from-pink-200 to-yellow-200'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-bold sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn hover:bg-gradient-to-r from-pink-200 to-yellow-200'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
