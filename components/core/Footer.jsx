"use client";

import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { activeRoutes } from "@/constants/routes";
import { endgameLogosPng } from "@/constants/assetsRoutes";
import { partners } from "@/constants/partners";
import Image from "../ui/image";
import Text from "../ui/Text";
import Link from "next/link";
import { Button, ButtonVariants } from "@/components/ui/button";
import ArticleIcon from "@mui/icons-material/Article";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer(props) {
  const { t } = useTranslation();

  const sectionTitleClasses = clsx("uppercase text-left-2 text-[14px] mb-3 ");
  const partnerLogoClasses = "min-w-20 max-h-20 md:w-fit";

  return (
    <footer className="h-fit bg-black text-gray-100">
      {/* FOOTER UP */}
      <div className="min-w-[280px] flex justify-between gap-12 md:gap-20 flex-wrap lg:flex-nowrap items-start">
        <div
          className={
            "flex flex-col gap-4 items-start justify-start md:justify-center"
          }
        >
          <Image
            className="max-w-[390px]"
            src={endgameLogosPng + "logo_ENDGAME_main_darkBg.png"}
            alt="ging logo"
            fit="contain"
          />
          <div className=" flex justify-center flex-col gap-0 xs:gap-2 md:flex-col md:gap-0 pl-4 max-w-[45ch]">
            <Text>{t("home.description")}</Text>
            {/* <div className="flex flex-row">
              <EmailOutlinedIcon
                className="mr-2 mt-0.5"
                sx={{ fontSize: 20 }}
              />
              <Text className=" text-[14px] flex gap-1">
                <b>{t("footer.email")} </b>
              </Text>
            </div>
            <Text className=""> gi.internetng@upm.es</Text>
          </div> */}
          </div>
        </div>

        <nav className="min-w-fit">
          <div className={sectionTitleClasses}>{t("footer.title1")}</div>
          <ul
            className={`font-semibold columns-1 gap-x-4 inline-block ${
              activeRoutes.length <= 3 ? "xs:columns-1" : "xs:columns-2"
            }`}
          >
            {activeRoutes.map((route, index) => (
              <li
                key={index}
                className={
                  route.route === props.route
                    ? "li-selected text-left mb-1 lg:mb-1.5 hover:underline"
                    : "text-left mb-1 lg:mb-1.5 hover:underline"
                }
              >
                <Link className="text-base" href={route.route}>
                  {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* <ul className="font-semibold flex flex-col gap-0.5">
          <div className={sectionTitleClasses}>{t("footer.title2")}</div>
          <Link
            target="_blank"
            href="https://www.youtube.com/user/FirefoxOSHTML5/featured"
            className={
              "text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"
            }
          >
            <Button
              href="#"
              className={
                ButtonVariants({
                  variant: "default",
                  size: "icon_sm",
                  radius: "rounded_full",
                }) + " bg-red-600 hover:bg-red-600 mr-2"
              }
            >
              <ArticleIcon sx={{ fontSize: 18 }} />
            </Button>
            <p>Youtube</p>
          </Link>
          <Link
            target="_blank"
            href="https://www.researchgate.net/lab/Next-Generation-Internet-Group-Juan-Quemada"
            className={
              "text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"
            }
          >
            <Button
              href="#"
              className={
                ButtonVariants({
                  variant: "default",
                  size: "icon_sm",
                  radius: "rounded_full",
                }) + " bg-blue-600 hover:bg-blue-600 mr-2"
              }
            >
              <ArticleIcon sx={{ fontSize: 18 }} />
            </Button>
            <p>ResearchGate</p>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/ging"
            className={
              "text-left mb-1 lg:mb-1.5 hover:underline flex flex-row items-center cursor-pointer"
            }
          >
            <Button
              href="#"
              className={
                ButtonVariants({
                  variant: "default",
                  size: "icon_sm",
                  radius: "rounded_full",
                }) + " bg-orange-500 hover:bg-orange-500 mr-2"
              }
            >
              <ArticleIcon sx={{ fontSize: 18 }} />
            </Button>
            <p> Github</p>
          </Link>
        </ul> */}

        <div className="min-w-fit font-sm flex flex-col">
          <Text type="small" className="mb-2">
            2025 ©{" "}
          </Text>
          <Text type="small">
            {t("footer.projectRef")}:{" "}
            <a
              href="https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/projects-details/43251814/101185763/CREA2027?keywords=MEDIALITERACY&isExactMatch=false&order=DESC&pageNumber=1&pageSize=50&sortBy=title"
              target="_blank"
            >
              <b>101185763</b>
            </a>
          </Text>
          <Text type="small">
            {t("footer.projectCall")}:{" "}
            <b> Creative Europe (CREA) </b>
          </Text>
          <Text type="small">
            {t("footer.projectDuration")}: <b>{t("footer.projectDurationContent")}</b>
          </Text>
        </div>
      </div>
      {/* FOOTER UP */}
      {/* FOOTER LOGOS */}
      <div className="mt-8 flex flex-col gap-16 justify-between md:flex-row flex-wrap lg:flex-nowrap pt-8 border-t border-gray-400">
        <div className={"flex flex-col gap-4 items-start justify-start"}>
          <Image
            className="!w-[250px]"
            src="/assets/images/logos/EN_Co-fundedbytheEU_RGB_WHITE.png"
            alt="co-funded by the European Union logo"
            fit="contain"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-6 justify-between lg:justify-end md:flex">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={partners.uef.link}
          >
            <Image
              className={partnerLogoClasses + " p-.5"}
              src={partners.uef.logo}
              alt={partners.uef.name_en + " logo"}
              fit="contain"
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={partners.upm.link}
          >
            <Image
              className={partnerLogoClasses}
              src={partners.upm.logo}
              alt={partners.upm.name_en + " logo"}
              fit="contain"
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={partners.bmu.link}
          >
            <Image
              className={partnerLogoClasses}
              src={partners.bmu.logo}
              alt={partners.bmu.name_en + " logo"}
              fit="contain"
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={partners.mdt.link}
          >
            <Image
              className={partnerLogoClasses + " p-2"}
              src={partners.mdt.logo}
              alt={partners.mdt.name_en + " logo"}
              fit="contain"
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={partners.ftb.link}
          >
            <Image
              className={
                partnerLogoClasses + " p-4"
              }
              src={partners.ftb.logo}
              alt={partners.ftb.name_en + " logo"}
              fit="contain"
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={partners.fnt.link}
          >
            <Image
              className={partnerLogoClasses + " p-3"}
              src={partners.fnt.logo}
              alt={partners.fnt.name_en + " logo"}
              fit="contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
