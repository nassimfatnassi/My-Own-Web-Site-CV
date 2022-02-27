import'./CantactMe.css';
import axios from "axios";
import {  useState } from "react";

export default function CantactMe(){

  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      lastname,
      email,
      number
    };
    try {
      const res = await axios.post("/posts/add", newPost);
      window.location.replace("/");
    } catch (err) { console.log(err) }
  };

    return(
        <>
        <p className="h2 text-center text-dark mt-5 fst-italic">Cantact me</p>
        <div className='formulaire'>
        <form onSubmit={handleSubmit}>
        <span className='fw-bold'>Name:</span>
        <input
          type="text"
          class="inputBox"
          placeholder="Name"
          id="Name"
          autoFocus={true}
            onChange={e=>setname(e.target.value)}
          />
           
        <span className='fw-bold'>Last Name:</span>
          <input
          type="text"
          class="inputBox"
          placeholder="Last Name"
          id="lastname"
          autoFocus={true}
            onChange={e=>setlastname(e.target.value)}
        />
        <span className='fw-bold'>Email:</span>
        <input
          type="email"
          class="inputBox"
          placeholder="Ex:test@test.com"
          id="email"
          autoFocus={true}
            onChange={e=>setemail(e.target.value)}
        />

        <span className='fw-bold'>Number:</span>
        <input
          type="text"
          class="inputBox"
          placeholder="+21600000000"
          id="num"
          autoFocus={true}
            onChange={e=>setnumber(e.target.value)}
        />
        <button class="btn btn-primary button ps-4 pe-4 pt-2 pb-2">Submit!</button>
        </form>
        </div>
        
        
        </>
    )
}