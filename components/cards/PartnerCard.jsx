import React from "react";
import Image from "../ui/image";
import Heading from "../ui/heading";

const PartnerCard = ({ partner }, key) => {
  // console.log(partner);

  return (
    <li className="mb-8 border border-primary h-52 flex flex-col" key={key}>
      <Heading
        level="h6"
        className="!mb-0 px-2 py-1 bg-primary !text-black min-h-16 place-content-center normal-case"
      >
        {partner.name}
      </Heading>
      <Image
        className="p-6" // to do: add custom padding for visual balance
        src={partner.logo}
        // src={partner.logoHorizontal ? partner.logoHorizontal : partner.logo} // cambiar cuando se metan los custom paddings
        alt={partner.logo + " logo"}
        fit="contain"
      />
    </li>
  );
};

export default PartnerCard;
