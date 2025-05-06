import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials, techStack } from "@/data";

const Clients = () => {
  return (
    <section id="techStack" className="py- overflow-hidden">
    {/*  <h1 className="heading">
        Kind words from
        <span className="text-purple-600">satisfied clients</span>
      </h1>
*/}
  <h1 className="heading">
    <span className="text-purple-600">Tools & Technologies </span>
     I work with
  </h1>
      <div className="flex flex-col items-center mt-10">
        <div className="rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStack}
            direction="left"
            speed="normal"
          />
        </div>

       {/* <div>
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div>
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div> */
       }
      </div>
    </section>
  );
};

export default Clients;
