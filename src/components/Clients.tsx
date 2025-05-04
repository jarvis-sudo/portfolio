import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials, techStack } from "@/data";

const Clients = () => {
  return (
    <section>
      <h1>
        Kind words from
        <span>satisfied clients</span>
      </h1>

      <div>
        <div>
          <InfiniteMovingCards
            items={techStack}
            direction="left"
            speed="normal"
          />
        </div>

          <div>
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
        </div>
        
      </div>
    </section>
  );
};

export default Clients;
