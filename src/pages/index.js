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
      <nav className="flex justify-center my-8 text-xl">
        <a className="" href="#">
          <img src="/appwallahlogo.png" className="h-16"></img>
        </a>
      </nav>

      <div className="px-4 mt-12 md:mt-32 md:flex md:justify-between md:mx-32">
        <div>
          <div className="text-5xl md:text-7xl mb-4 font-bold text-[#0a0f67]">
            Best Mobile App<br></br>
            Development Company<br></br>
            in Jharkhand
          </div>
          <div className="text-xl md:text-2xl">
            We design and develop Android & IOS<br></br>
            mobile Applications for your buisness
          </div>
        </div>
        <div className="px-8 py-4 mt-12">
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
          <div className="text-5xl md:text-7xl font-bold text-[#0a0f67] mb-8 mt-12">
            How we work
          </div>
          <div className="text-md md:text-2xl text-gray-400 font-light">
            We're a team of experienced content writers, designers, engineers,{" "}
            <br></br>
            testers and product managers. We'll carefully translate your vision
            into a product.
          </div>
        </div>
      </div>

      <footer className="bg-[#ddddf4] mt-32">
        <div className="py-12 md:flex md:justify-between md:mx-32">
          <a className="inline-block" href="#">
            <img src="/appwallahlogo.png"></img>
          </a>
          <div className="mx-6">
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
