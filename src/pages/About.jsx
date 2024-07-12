import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          <br />Navod Dulshan
        </span>{" "}
        👋
      </h1>

      

      <div className='mt-5 flex flex-col gap-3 text-black'>
        <p>
        As a web developer with extensive experience in front-end development, I bring a proven track record of 
        success in creating high-quality, responsive websites
        and web applications. In addition to my technical skills, I
        possess excellent communication, leadership, and
        problem-solving abilities.
        </p>
      </div>
      

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text underline'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default About;
