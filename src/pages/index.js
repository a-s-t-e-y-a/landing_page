import { useState } from "react";
import axios from "axios";
export const config = {
  unstable_runtimeJS: false,
};
export default function Landing() {
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  function submit(e) {
    e.preventDefault();
    if (name && phone) {
      axios
        .post(
          "https://hooks.slack.com/services/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",
          {
            text: `Name->${name}\nPhone Number->${phone}`,
          }
        )
        .then((res) => {
          console.log(res);
        });
      // alert("Data enter sucessfully");
      // location.reload()
    } else {
      alert("enter all value");
    }
  }
  return (
    <div>
      <nav className=" mx-32 my-8 text-xl">
        <ul className="flex justify-between items-center">
          <li className="mr-3">
            <a className="inline-block" href="#">
              <img src="/appwallahlogo.png"></img>
            </a>
          </li>
          <div className="flex  gap-12 ">
            <li className="mr-3">
              <a
                className="inline-block border  rounded-xl border-white rounded bg-[#0a0f67] text-white py-2 px-4"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white rounded-xl bg-[#0a0f67]"
                href="#"
              >
                Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>

      <div className="flex mx-32 my-32 items-center justify-between">
        <div>
          <div className="text-7xl mb-12 font-bold text-[#0a0f67]">
            Best Mobile App<br></br>
            Development Company<br></br>
            in Jharkhand
          </div>
          <div className="text-2xl">
            We design and develop Android & IOS<br></br>
            mobile Applications for your buisness
          </div>
        </div>
        <div className="px-8 py-4">
          {/* <form>
            <div className="text-center text-[#0a0f67] text-2xl mb-12 font-bold">
              Start project
            </div>
            <div>
              <div className="text-xl mb-2 font-bold text-[#0a0f67] ">
                Enter name *
              </div>
              <input
                onChange={(e) => {
                  setname(e.target.value);
                }}
                name="name"
                defaultValue={name}
                placeholder="Enter name"
                type="text"
                className="text-xl h-12 mb-12 px-4 border-white bg-[#c2c5f9] rounded-xl text-black"
              ></input>
            </div>
            <div>
              <div className="text-xl mb-2 font-bold text-[#0a0f67] ">
                Enter phone no *
              </div>
              <input
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                name="phoneno"
                defaultValue={phone}
                placeholder="Enter phone no"
                type="text"
                className=" mb-12 text-xl h-12 px-4 border-white bg-[#c2c5f9] rounded-xl text-black"
              ></input>
            </div>
            <button
              onClick={submit}
              className=" px-32 t py-2 text-xl bg-[#0a0f67] rounded-xl text-white"
            >
              Submit
            </button>
          </form> */}
          <button className="bg-[#0a0f67] px-4 py-2 rounded-lg hover:bg-white ">
            <a
              className="flex items-center text-2xl font-bold text-white hover:text-[#0a0f67]"
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=9153662397"
            >
              Start chat
              <span>
                <img src="/icons8-whatsapp.svg"></img>
              </span>
            </a>
          </button>
        </div>
      </div>

      <div className="flex justify-center text-center mt-32">
        <div>
          <div className="text-7xl font-bold text-[#0a0f67] mb-12 mt-32">
            How we work
          </div>
          <div className="text-4xl  text-gray-400 font-light">
            We're a team of experienced content writers, designers, engineers,{" "}
            <br></br>
            testers and product managers. We'll carefully translate your vision
            into a product.
          </div>
        </div>
      </div>

      <footer className="bg-[#ddddf4] mt-32">
        <div className="flex gap-32 justify-center items-center py-12">
          <a className="inline-block" href="#">
            <img src="/appwallahlogo.png"></img>
          </a>
          <div>
            <h2 className="mb-6 text-3xl font-bold">About</h2>
            <div>
              helloappwallah@gmail.com<br></br>
             <a  
             target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=9153662397">+91 91536 62397</a> <br></br>
              101, R.R. Tower, Ratu Road, Ranchi<br></br>
              Jharkhand, 834001
            </div>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-center">
          <span className="text-sm sm:text-center">
            © 2023 All rights reserved. Netverse Tech Private Limited.
            appwallah.com
          </span>
        </div>
      </footer>
    </div>
  );
}
