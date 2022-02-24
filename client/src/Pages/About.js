import {Link} from "react-router-dom";
import'./About.css';
export default function About(){
    return(
        <>
        <p className="h2 text-center pt-3 fst-italic">About me</p>
        <p className="text-center pt-3">Hi, I&apos;m Nassim Fatnassi Hnifi I&apos;m in love with coding and technology ❤️. </p>
        <p className="text-center">I have a bachelor&apos;s degree License in Mechanical Engineering speciality &apos;Mechatronics&apos; from ISET Beja.</p>
        <p className="h4 text-center pt-5">My Resume</p>
        <p className="h1 text-center"><i class="bi bi-clipboard2-check"></i></p>
        <a className="clickhere" target="_blank" href="https://drive.google.com/file/d/1JMuqIXb7GuOlztC2nyuvsVuAiEr1mujC/view" > Click Here! </a>
       
       
        </>
    )
}