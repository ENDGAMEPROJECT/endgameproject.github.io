import { uniLogos, agenciesLogos } from "@/constants/assetsRoutes";

export const partners = {
  // unis
  upm: {
    name: "Polytechnic University of Madrid",
    name_es: "Universidad Politécnica de Madrid",
    name_fi: "Polytechnic University of Madrid",
    name_sr: "Polytechnic University of Madrid",
    shortname: "UPM",
    logo: uniLogos + "upm_logo-vertical-color.png",
  },
  uef: {
    name: "University of Eastern Finland",
    name_es: "University of Eastern Finland",
    name_fi: "University of Eastern Finland",
    name_sr: "University of Eastern Finland",
    shortname: "UEF",
    logo: uniLogos + "uef_logo-vertical-darkBg.png",
  },
  bmu: {
    name: "Belgrade Metropolitan University",
    name_es: "Belgrade Metropolitan University",
    name_fi: "Belgrade Metropolitan University",
    name_sr: "Univerzitet Metropolitan Beograd",
    shortname: "BMU",
    logo: uniLogos + "bmu_logo-vertical-darkBg.png",
  },
  //   agencies
  maldita: {
    name: "Maldita",
    logo: agenciesLogos + "maldita_logo-vertical-darkBg.png",
  },
  faktabaari: {
    name: "Faktabaari",
    logo: agenciesLogos + "faktabaari_logo-darkBg.png",
  },
  fnt: {
    name: "Fake News Tragač",
    logo: agenciesLogos + "fnt_logo-darkBg.png",
  },
};
