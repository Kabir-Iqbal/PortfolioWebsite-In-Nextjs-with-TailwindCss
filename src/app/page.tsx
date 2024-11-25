import Image from "next/image"
import Header from "./components/header"
import Footer from "./components/footer"

function page() {
  return(
    <>
    <div className="bg-bodycolor text-white">
    <div className="bg-bodycolor h-svh">
    {/* Header */}
    
    <Header/>

    {/* Body */}
    {/* first page */}
    
    <div id="home" className="flex flex-col items-center w-11/12 max-h-fit  md:flex-row md:w-11/12 py-40 mx-auto  justify-between font-sans text-white ">
      <div className=" flex flex-col w-11/12  md:w-6/12 mx-auto my-16 mr-10 gap-2"><h2 className="text-2xl">Hello, I&apos;m</h2>
        <h1 className="text-5xl ">Kabir Iqbal</h1>
        <p className="text-xl">Creative and Passionate Web Developer | Specializing in React, UI/UX Design,
           and Building Scalable, Responsive Web Solutions </p>          <p className="flex gap-4 my-5 ">
          <button className="bg-blue-500 py-2 px-5 rounded-xl text-white hover:bg-blue-600 ">Contact Me</button>
           <button className=" border-2 border-blue-800 py-2 px-5 rounded-xl hover:border-blue-400 ">Download CV</button>  </p>
           <hr className="w-6/12 h-[1px] bg-blue-600 "   />
          </div> 
              
      <div className=" justify-center h-64 w-64 mr-4 md:mr-0  -order-1 md:w-72 md:h-72  bg-blue-400 rounded-full border-[1px] border-blue-700 "> <Image className="h-64 w-64  md:w-72 md:h-72 rounded-full " src="/images/dp.png" alt="Profile pic" width={150} height={150} /> </div>
    </div>
    
    </div>

    {/* About */}
    <div id="about" className=" text-white h-fit w-10/12 my-0 mx-auto mt-20 font-sans scroll-mt-20">
         <h2 className="text-3xl text-center font-bold ">About Me</h2>
         <h3 className="text-xl font-bold mt-12 " >A Passionate Front-End Developer </h3>
         <hr className="w-[29%]  " />
         <p className="text-[14px] my-2">Iam a passionate front-end developer with a foundation in HTML , CSS , Javascript , Typescript.
                I enjoying creating responsivnes,user friendly and web application that focus on clean design and
                seamiess functionality. As someone who is always eagger to learn and grow. Iam currently expanding
                my skill set by react.js and Next.js to enhance my ability to build modern, high perfomance web solution</p>

            <h3 className="text-xl font-bold mt-14 " > Current Studies</h3>
            <hr className="w-[13%] "/>
            <p className="text-[14px] my-2">Iam currently in second quarter of an Artificial intelligence course, having success cleard first quarter
                with the 70 percentile. My journey continous as I enhance my skills inn both AI and front-end
                development.</p>

            <h3 className="text-xl font-bold mt-14 ">Future Goals</h3>
            <hr className="w-[11%] "/>
            <p className="text-[14px] my-2">As I continue to master modern web development technologies. My goal is work to more comlex
               , scalabe projects, Iam excited to explore more opertunties when I can merge my front-end experties with my growing
                knowledge in Artificial intelligence, contributing to innovative and impactiful solutions.</p>

                <hr className="w-8/12 h-[1px] mx-auto text-white mt-20" />
      </div>
    {/* Skills */}
  
    <div id="skill" className="w-11/12 h-fit md:w-9/12 my-0 mx-auto scroll-mt-20 font-sans">
    <h2 className="h2-code">Skills</h2>
       <div className="flex flex-wrap h-fit justify-center  gap-8 ">
        <div className="card">
          <Image className=" style" src="/images/html-logo.png" width={100} height={100} alt="Html-logo" />
          <h3 className="style-font">Html5</h3>
          <p className="text-sm">The basic language for structuring web content.</p>
        </div>
        <div className="card">
        <Image className=" style mb-2" src="/images/css3.png" width={100} height={100} alt="CSS-logo" />
          <h3 className="style-font">CSS3</h3>
          <p>Styles and layouts for web pages</p>
          </div>
        <div className="card">
        <Image className=" style" src="/images/tailwind.png" width={100} height={100} alt="Tailwind-CSS-logo" />
         <h3 className="style-font" > Tailwind CSS </h3>
         <p>Utility-first framework for quick, custom designs.</p>
         </div>
        <div className="card">
        <Image className=" style" src="/images/typescript.png" width={100} height={100} alt="typescript-logo" />
         <h3 className="style-font"> Typescript</h3>
         <p>Typed JavaScript for better error checking and maintainability.</p>
         </div>
        <div className="card">
        <Image className=" style" src="/images/react.webp" width={100} height={100} alt="React.js-logo" />
         <h3 className="style-font"> React js </h3>
         <p>Library for building UI components and single-page apps</p>
         </div>
        <div className="card">
        <Image className=" style" src="/images/next.png" width={100} height={100} alt="Next.js-logo" />
         <h3 className="style-font">Next Js </h3>
         <p>React framework for server-side rendering and enhanced performance</p>
         </div>
       </div>
    </div>
    <hr className="w-8/12 h-[1px] mx-auto text-white mt-12" />

    {/* Contact Form */}
  <div id="contact" className="w-9/12 h-fit mx-auto pl-3 scroll-mt-14 font-sans">
    <div>

    </div>
     <div className=" w-12/12 sm:9/12 md:w-7/12 flex flex-col  mx-auto" >
      <h2 className="text-2xl font-bold text-center mb-6 mt-12">Contact Form</h2>
      <form  action="#/" method="post">
      <p className="contact-p ">First Name :</p>
      <input className="w-11/12 h-7 rounded-sm text-black px-1" type="text" name="First name" id="name" placeholder="Your Name..?" />

      <p className="contact-p ">Email :</p>
      <input className="w-11/12 h-7 rounded-sm text-black px-1" type="email" name="Email" id="email" placeholder="Enter Your Email.." />

      <p className="contact-p ">Message :</p>
      <textarea className="w-11/12 h-14 border-0 rounded-sm text-black px-1" name="message" id="message" placeholder="Enter Your Message."></textarea>
      </form>
      <div className="text-center ">
     <button className=" rounded-2xl px-8 font-semibold text-xl my-5   text-white bg-gray-800 border-2 border-blue-900 hover:border-blue-300 " type="submit">Submit</button>
     </div>
    </div> 
  </div>

  {/* Footer */}
  <Footer />

    </div>
    </>
  )
}

export default page