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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

export default function Footer(props) {
  const { t } = useTranslation();
  const { webTheme } = useContext(ThemeContext);

  const sectionTitleClasses = clsx(
    "uppercase text-left-2 text-[14px] mb-3 font-normal text-myText"
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
            src={endgameLogosPng + (webTheme == "light" ? "logo_ENDGAME_main_lightBg.png" : "logo_ENDGAME_main_darkBg.png")}
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

        <ul className="font-semibold min-w-fit text-myText">
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
            <p className="text-myText" > Instagram</p>
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
            <p className="text-myText" >X</p>
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
                    fill={webTheme == "light" ? "black": "white"}
                  />
                </svg>
              </i>
            </Button>
            <p className="text-myText" >TikTok</p>
          </Link>
          {/* LinkedIn */}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/end-game-project-477149364/"
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
                }) + " p-[14px] rounded-full bg-blue-600/30 hover:bg-blue-600/60 mr-2"
              }
            >
              <LinkedInIcon sx={{ fontSize: 20 }} />
            </Button>
            <p className="text-myText" >LinkedIn</p>
          </Link>
          {/* Discord */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/qsVDvCqpp"
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
                }) + " p-[14px] rounded-full bg-[#5865F2]/30 hover:bg-[#5865F2]/60 mr-2"
              }
            >
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                    fill={webTheme == "light" ? "black" : "white"}
                  />
                </svg>
              </i>
            </Button>
            <p className="text-myText">Discord</p>
          </Link>
        </ul>

        <div className="min-w-fit font-sm flex flex-col">
          <Text type="small" className="mb-2">
            2025 ©
          </Text>
          <Text type="small">
            {t("footer.projectRef")}{" "}
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
            src={webTheme == "light" ? "/assets/images/logos/EN_Co-fundedbytheEU_RGB_Monochrome.png" : "/assets/images/logos/EN_Co-fundedbytheEU_RGB_WHITE.png"}
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
              src={webTheme == "light" ? partners.uef.logoLight : partners.uef.logo}
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
              src={webTheme == "light" ? partners.bmu.logoLight : partners.bmu.logo}
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
              src={webTheme == "light" ? partners.mdt.logoLight : partners.mdt.logo}
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
              src={webTheme == "light" ? partners.ftb.logoLight : partners.ftb.logo}
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
              src={webTheme == "light" ? partners.fnt.logoLight : partners.fnt.logo}
              alt={partners.fnt.name_en + " logo"}
              fit="contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
