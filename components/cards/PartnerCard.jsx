import React from "react";
import Image from "../ui/image";
import Heading from "../ui/heading";

const PartnerCard = ({ partner }, key) => {
  console.log(partner);

  return (
    <li className="mb-8 border border-primary h-52 flex flex-col" key={key}>
      <Image
        className="p-8"
        src={partner.logo}
        alt={partner.logo + " logo"}
        fit="contain"
      />
      <Heading level="h5" className="mb-0 px-4 bg-primary !text-black">
        {partner.name}
      </Heading>
    </li>
  );
};

export default PartnerCard;
