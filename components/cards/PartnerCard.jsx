import React from "react";
import Image from "../ui/image";
import Heading from "../ui/heading";
import Link from "next/link";

const PartnerCard = ({ partner }, key) => {
  const paddingById = {
    "uef": "p-5",
    "upm": "p-4",
    "bmu": "p-4",
    "mdt": "p-6",
    "ftb": "p-8",
    "fnt": "p-6",
  };

  const customPadding = paddingById[partner.id] || "p-4";

  return (
    <li className="mb-8 border border-primary h-52 flex flex-col" key={key}>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={partner.link}
        className="min-h-16 flex flex-col"
      >
        <Heading
          level="h6"
          className=" !mb-0 px-2 py-1 bg-primary !text-black min-h-16 place-content-center normal-case"
        >
          {partner.name}
        </Heading>
        <Image
          className={customPadding} // to do: add custom padding for visual balance
          src={partner.logo}
          fit="contain"
          // src={partner.logoHorizontal ? partner.logoHorizontal : partner.logo} // cambiar cuando se metan los custom paddings
          alt={partner.logo + " logo"}
        />
      </Link>
    </li>
  );
};

export default PartnerCard;
