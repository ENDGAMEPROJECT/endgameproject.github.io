import Page from "./../app/page";
import About from "./../app/about/page";
import Escaperooms from "@/app/escaperooms/page";
import Events from "./../app/events/page";
import Research from "./../app/research/page";
import { Route, Routes } from "react-router-dom";

export const routes = [
    { route: "/", key: "nav.home", page:<Page/>, active: false },
    { route: "/escaperooms", key: "nav.escaperooms", page:<Escaperooms/>, active: false },
    { route: "/events", key: "nav.events", page:<Events/>, active: false },
    { route: "/research", key: "nav.research", page:<Research/>, active: false },
    { route: "/about", key: "nav.about", page:<About/>, active: false },
  ];

export const activeRoutes = routes
  .filter(route => route.active)  // Filtrar solo las rutas activas
