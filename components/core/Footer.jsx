"use client";

import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { activeRoutes } from "@/constants/routes";
import { endgameLogosPng } from "@/constants/assetsRoutes";
import { partners } from "@/constants/partners";
import Image from "../ui/image";
import Text from "../ui/text";
import Link from "next/link";
import { Button, ButtonVariants } from "@/components/ui/button";
import ArticleIcon from "@mui/icons-material/Article";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export default function Footer(props) {
  const { t } = useTranslation();

  const sectionTitleClasses = clsx(
    "uppercase text-left-2 text-[14px] mb-3 font-normal"
  );
  const partnerLogoClasses = "min-w-20 max-h-20 md:w-fit";

  return (
    <footer className="h-fit bg-myBackground text-gray-100">
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
                    ? "li-selected text-left mb-1 lg:mb-1.5 hover:underline text-myText"
                    : "text-left mb-1 lg:mb-1.5 hover:underline text-myText"
                }
              >
                <Link className="text-base" href={route.route}>
                  {t(route.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="font-semibold min-w-fit">
          <div className={sectionTitleClasses}>{t("footer.title2")}</div>
          {/* Instagram */}
          <Link
            target="_blank"
            href="https://www.instagram.com/endgame.project?utm_source=ig_web_button_share_sheet&igsh=MXZ2Z3ZnY2Z3emRmcw=="
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
                }) + " p-[14px] rounded-full bg-accent/30 hover:bg-accent/60 mr-2"
              }
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
            </Button>
            <p> Instagram</p>
          </Link>
          {/* Twitter */}
          <Link
            target="_blank"
            href="https://x.com/endgame_project"
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
                }) + " p-[14px] rounded-full bg-secondary/30 hover:bg-secondary/60 mr-2"
              }
            >
              <XIcon sx={{ fontSize: 18 }} />
            </Button>
            <p>X</p>
          </Link>
          {/* Tik tok */}
          <Link
            target="_blank"
            href="https://www.tiktok.com/@endgame.project"
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
                }) + " p-[14px] rounded-full bg-purple-500/30 hover:bg-purple-500/60 mr-2"
              }
            >
              <i>
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6002 2.82C11.9167 2.03953 11.5401 1.0374 11.5402 0H8.45016V12.4C8.42682 13.0712 8.14368 13.7071 7.66046 14.1735C7.17725 14.6399 6.53175 14.9004 5.86016 14.9C4.44016 14.9 3.26016 13.74 3.26016 12.3C3.26016 10.58 4.92016 9.29 6.63016 9.82V6.66C3.18016 6.2 0.160156 8.88 0.160156 12.3C0.160156 15.63 2.92016 18 5.85016 18C8.99016 18 11.5402 15.45 11.5402 12.3V6.01C12.7932 6.90985 14.2975 7.39265 15.8402 7.39V4.3C15.8402 4.3 13.9602 4.39 12.6002 2.82Z"
                    fill="white"
                  />
                </svg>
              </i>
            </Button>
            <p>TikTok</p>
          </Link>
        </ul>

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
            {t("footer.projectCall")}: <b> Creative Europe (CREA) </b>
          </Text>
          <Text type="small">
            {t("footer.projectDuration")}:{" "}
            <b>{t("footer.projectDurationContent")}</b>
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
              className={partnerLogoClasses + " p-3"}
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
