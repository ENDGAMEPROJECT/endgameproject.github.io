import React from "react";
import Image from "../ui/image";
import Heading from "../ui/Heading";
import Link from "next/link";
import HighlightedHeader from "../ui/highlightedHeader";

const PartnerCard = ({ partner }, key) => {
  const paddingLogoById = {
    uef: "p-5",
    upm: "p-3",
    bmu: "p-10",
    mdt: "p-12 md:p-8 lg:p-12",
    ftb: "p-8 ",
    fnt: "p-6 md:p-9 lg:p-8",
  };
  const customPaddingLogo = paddingLogoById[partner.id] || "p-4";

  const paddingNameById = {
    uef: "pr-8",
    // bmu: "pr-.5",
  };
  const customPaddingName = paddingNameById[partner.id] || "";
  
  return (
    <li className="mb-8 mx-auto w-[400px] md:w-full flex flex-col" key={key}>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={partner.link}
        className="min-h-16 h-full flex flex-col"
      >
        {/* <Heading
          level="h6"
          className=" !mb-0 px-2 py-1 bg-primary !text-black min-h-16 place-content-center normal-case"
        >
          {partner.name}
        </Heading> */}
        <HighlightedHeader
          level="h6"
          string={partner.name}
          className={customPaddingName + ' text-[18px] font-semibold'}
        />
        <Image
          className={customPaddingLogo + " h-40 border border-primary bg-black"} // to do: add custom padding for visual balance
          // src={partner.logo}
          fit="contain"
          src={partner.logoHorizontal ? partner.logoHorizontal : partner.logo} // cambiar cuando se metan los custom paddings
          alt={partner.logo + " logo"}
        />
      </Link>
    </li>
  );
};

export default PartnerCard;
