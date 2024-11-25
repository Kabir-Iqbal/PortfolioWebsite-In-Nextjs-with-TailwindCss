import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return(
        <>
        <div className="bg-footercolor relative bottom-0 mt-50px w-12/12 mt-10 font-sans">
        <footer className="flex flex-col text-white w-9/12 md:w-7/12 text-center mx-auto ">
        <h2 className="text-2xl font-bold text-center mb-4 mt-12 " > Dedicated Developer</h2>
        <p className=" text-sm ">&quto; Skilled developer who loves creating smart and efficient web solutions. I enjoy turning ideas into simple,
           user-friendly experiences. Always learning new technologies and ready to solve problems to deliver great results. &quto; </p>

           <h2 className="text-2xl font-bold text-center mb-4 mt-12 px-2">Get in Touch</h2> 
            <div className="flex  w-9/12 md:7/12 justify-center mx-auto px-7 gap-4 my-2 cursor-pointer mb-9 text-2xl" >
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiL%2FgDkLLT7qh6G%2Fv9YvVKw%3D%3D"> <FaLinkedin className="text-blue-600" /> </a>
            <a href="https://github.com/Kabir-Iqbal"> <FaGithub  /> </a>
            <a href="https://web.facebook.com/profile.php?id=100073063770870"><FaFacebook className="text-blue-800" /> </a>
             <a href="mailto:kabirhussain0343837@gmail.com"> <MdEmail className="text-gray-300" /> </a> 
            </div> 
         </footer>

        
        </div>
        </>
    )
}

export default Footer