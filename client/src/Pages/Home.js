
import'./Home.css';

export default function Home(){
    return (
      <>
       <img className="photo" src="photoCV2.jpg" alt="photo cv" width="200px"/>
       <p className="h3 nom pt-3 ps-2 pe-2">Nassim Fatnassi Hnifi</p>
       <p className="h4 nom ps-5 pe-5">Mécatronicien <i class="bi bi-gear-wide-connected"> </i> <i class="bi bi-hammer"></i></p>
       <p className="h4 nom mb-5 ps-5 pe-5">Web developer <i class="bi bi-pc-display-horizontal"> <i class="bi bi-code-slash"></i></i></p>
       <span className="h4 span">
       <i class="bi bi-linkedin"></i> <a target="_blank" className="linkedln" href="https://www.linkedin.com/in/nassim-fatnassi-hnifi-a1698a186/" > Linkedln </a>
       <i class="bi bi-github"></i> <a target="_blank" className="github" href="https://github.com/nassimfatnassi" > Github </a>
       </span>
       </>
       )
}