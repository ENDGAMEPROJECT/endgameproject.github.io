import { uniLogos, agenciesLogos } from "@/constants/assetsRoutes";

export const partners = {
  // unis
  upm: {
    id: 'upm',
    name: "Polytechnic University of Madrid",
    name_es: "Universidad Politécnica de Madrid",
    name_fi: "Polytechnic University of Madrid",
    name_sr: "Polytechnic University of Madrid",
    shortname: "UPM",
    logo: uniLogos + "upm_logo-vertical-color.png",
    logoHorizontal: uniLogos + "upm_logo-horizontal-color.png",
    link: 'https://www.upm.es/',
  },
  uef: {
    id: 'uef',
    name: "University of Eastern Finland",
    name_es: "University of Eastern Finland",
    name_fi: "University of Eastern Finland",
    name_sr: "University of Eastern Finland",
    shortname: "UEF",
    logo: uniLogos + "uef_logo-vertical-darkBg.png",
    link: 'https://www.uef.fi/',
  },
  bmu: {
    id: 'bmu',
    name: "Belgrade Metropolitan University",
    name_es: "Belgrade Metropolitan University",
    name_fi: "Belgrade Metropolitan University",
    name_sr: "Univerzitet Metropolitan Beograd",
    shortname: "BMU",
    logo: uniLogos + "bmu_logo-vertical-darkBg.png",
    logoHorizontal: uniLogos + "bmu_logo-horizontal-darkBg.png",
    link: 'https://www.metropolitan.ac.rs/',
  },
  //   agencies
  mdt: {
    id: 'mdt',
    name: "Maldita",
    logo: agenciesLogos + "maldita_logo-vertical-darkBg.png",
    logoHorizontal: agenciesLogos + "maldita_logo-horizontal-darkBg.png",
    link: 'https://maldita.es/',
  },
  ftb: {
    id: 'ftb',
    name: "Faktabaari",
    logo: agenciesLogos + "faktabaari_logo-darkBg.png",
    link: 'https://faktabaari.fi/',
  },
  fnt: {
    id: 'fnt',
    name: "Fake News Tragač",
    logo: agenciesLogos + "fnt_logo-darkBg.png",
    link: 'https://fakenews.rs/',
  },
};
