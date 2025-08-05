import React from 'react';
import Ladylapi from '../assets/Ladylap 1.png';
import shine from '../assets/shine-text.png';
import overhead from '../assets/overhead.png';
import ellipses from '../assets/ellipses-animated.png';
import graduation from "../assets/graduation-icon.png";
import guidance from "../assets/guidance-icon (1).png";
import learning from '../assets/learning-icon.png';
import Button from './Button';
import ellipsesanimated from '../assets/ellipses-animated1.png';
import ellipses16 from '../assets/ellipse 16.png'; 
import studygroup from '../assets/study-group-learning-library.png 1.png'; 
import Cards from './Cards';
import mentor1 from '../assets/mentor1.png';
import mentor2 from '../assets/mentor2.png';  
import mentor3 from '../assets/mentor3.png';
import mentor4 from '../assets/mentor4.png';
import penIcon from '../assets/Group.png'; 
const HeroSection = () => {
  const stats = [
    { number: "300+", description: "Courses Offered" },
    { number: "95%", description: "Satisfaction Rate" },
    { number: "100+", description: "Mentor Experts" },
    { number: "20+", description: "Years Of Experience" }
  ];


 

  return (
    <>
      <section className="container mx-auto mt-10 py-20">
        <div className="grid lg:grid-cols-2 gap-2 items-center px-8 py-10">
          
          {/* Left Content */}
          <div className="flex flex-col items-center space-y-8 lg:items-start">
            <div className="flex flex-cols-2 items-start ">
              <img src={shine} alt="shine" className="mt-0 pl-8 pr-0" />
              <h1 className="text-4xl font-bold leading-[50px] ">
                Applying cutting-edge <br />
                techniques for <span className="text-yellow-400">transformative</span> <br />
                learning experiences
              </h1>
            </div>
          <div className="flex flex-col items-center space-y-4 px-6 lg:items-start ">
             <div className="flex  items-center pl-6 pb-2">
                <p className="text-gray-500 text-md font-medium leading-relaxed ">
              Experience customised education paths and mentorship that foster significant growth 
              and lead to achieving your career aspirations.
            </p>
             </div>
           
             <div className="flex items-center pl-6 pb-4">
              <a href="/Welcomescreen">
              <Button
                label="Get Started"
                className="text-white px-8 py-2 rounded-md bg-[linear-gradient(180deg,_#2769C0_4.79%,_#0F1A4F_48.12%)] hover:opacity-90"
              />
            </a>

             </div>
            
            {/* Features */}
            <div className="flex flex-rows-1 mt-6 space-x-6">
              <div className="flex flex-cols-2 items-center space-x-2">
                <img src={graduation} alt="graduation" />
                <span className="text-gray-500 font-semibold">Quality Education</span>
              </div>
              <div className="flex flex-cols-2 items-center space-x-2">
                <img src={learning} alt="learning" />
                <span className="text-gray-500 font-semibold">Custom Learning</span>
              </div>
              <div className="flex flex-cols-2 items-center space-x-2">
                <img src={guidance} alt="guidance" />
                <span className="text-gray-500 font-semibold">Holistic Guidance</span>
              </div>
            </div>
          </div>
          </div>
           

          {/* Right Content (Images) */}
          <div className="relative flex justify-center ">
            <img
              src={overhead}
              alt="overhead"
              className="absolute top-0 left-0 right-0 w-140 h-90  object-contain z-10 "
            />
            <img
              src={Ladylapi}
              alt="lady with laptop"
              className="relative w-50 h-50 z-20"
            />
            <img
              src={ellipses}
              alt="ellipses"
              className="absolute right-0 bottom-0 w-100 h-40  object-contain z-30"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className={`px-4 ${index !== 0 ? "border-l border-gray-300" : ""}`}>
                <h2 className="text-3xl font-bold">{stat.number}</h2>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="container mx-auto mt-10 py-2 px-6 bg-[rgba(255,255,226,1)] rounded-lg">
        <div className="grid lg:grid-cols-2 gap-6 items-center px-6">
          
          {/* Left side - Image with ellipse background */}
          <div className="relative">
            <img
              src={ellipses16}
              alt="ellipse background"
              className="absolute top-24 mt-6 left-0 w-90 h-96 object-contain z-10"
            />
            <img
              src={studygroup}
              alt="study group"
              className="relative w-[1200px] h-90 px-4 z-20 mt-0"
            />
          </div>

          {/* Right side - Steps */}
          <div className="flex flex-col gap-6 pl-6">
            <h1 className="text-gray-800 text-3xl font-extrabold">
              Achieve <span className="text-yellow-500">Mastery!</span>
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              Begin your journey with our expertly designed programs to gain deep
              knowledge and skills. Start now to unlock your potential and reach new
              heights in your field.
            </p>

            {/* Steps */}
            <div className="flex flex-cols-2 gap-4">
              <div>
            <div className="relative space-y-8">
              {[
                { num: "1", text: "Sign Up", desc: "Easily create your account and get started." },
                { num: "2", text: "Pick your path", desc: "Select a program tailored to your goals." },
                { num: "3", text: "Connect with Mentors", desc: "Receive expert guidance and personalized support." },
                { num: "4", text: "Earn Certification", desc: "Complete the course and earn your certification." },
              ].map((step, index, arr) => (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Vertical line */}
                  {index !== arr.length - 1 && (
                    <span className="absolute left-5 top-10 h-8 border-l-2 border-yellow-500 z-0"></span>
                  )}

                  {/* Number circle */}
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold text-lg">
                    {step.num}
                  </div>

                  {/* Text content */}
                  <div>
                    <h2 className="text-gray-800 font-bold">{step.text}</h2>
                    <p className="text-gray-800 text-sm">{step.desc}</p>
                  </div>
                  
                </div>
              ))}
              
            </div>
            <div className="flex justify-center items-center pl-10 mt-6">
               <a href="/Welcomescreen">
              <Button
                label="Learn More"
                className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold hover:opacity-90"
              />
            </a>
            </div>
           
           </div>
                  <div className='flex justify-center items-center pl-10 mt-6'>
                    <img src={ellipsesanimated} alt="" />
                  </div>
          </div>
  </div>
          </div>
</section>

       <section className='container mx-auto mt-10 py-20 bg-white rounded-lg shadow-lg'>
        <div className="flex flex-col px-6 md:px-16 py-4">
          <div className="flex flex-col  justify-start mb-6">
            <h2 className='text-3xl font-bold text-[rgba(15,26,79,1)] mb-2'>COURSES</h2>
          <h1 className="text-3xl font-extrabold text-[rgba(15,26,79,1)] mb-2">Dive into Our Courses</h1>
          <p className="text-gray-600 text-lg max-w-xl leading-loose mb-10">
            Explore Engaging Lessons, Tailored Programs, and Hands-on Learning Experiences that Empower
            You to Unlock Your Full Potential and Achieve Success in Your Educational Journey.
          </p>
          </div>
        <div  className=''>
                <Cards />
               
        </div>

         
        </div>
    
   </section>

        <section className="container mx-auto mt-10 py-20 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-2 bg-gradient-to-b from-[#fff7e9] to-[#ffe9ac]">
      
      {/* Left: Mentor Images */}
      <div className="grid grid-cols-2 grid-rows-2  w-full md:w-1/2 px-2 py-2 m-6 mt-14">
        <div className="p-2 flex  items-center"> 
          <img src={mentor1} alt="Mentor 1" />
        </div>
        <div className="p-2 flex  items-center"> 
          <img src={mentor2} alt="Mentor 2" />
        </div>
        <div className="p-2 flex  items-center "> 
          <img src={mentor3} alt="Mentor 3" />
        </div>
        <div className="p-2 flex  items-center "> 
          <img src={mentor4} alt="Mentor 4" />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left p-0 mt-0">
        <p className="text-sm font-bold text-[#221c4e] uppercase mb-2">Meet your mentors</p>
        
        <div className="flex flex-row">
          <h2 className="text-3xl font-bold text-black mb-4">
          Expert Guidance </h2>
          <img src={penIcon} alt="pen icon" className="w-8 h-8 ml-2 mt-1" />
        </div>
        <p className="text-gray-700 max-w-md">
          Our mentors are seasoned industry experts dedicated to guiding you with personalized support and real-world insights. With their expertise by your side, you'll have the confidence and knowledge to achieve your learning goals and excel in your chosen field.
        </p>
      </div>
    </div>

        </section>
    </>
  );
};

export default HeroSection;
