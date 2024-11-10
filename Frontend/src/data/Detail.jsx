import react from "../assets/technology/react.svg"
import python from "../assets/technology/python.svg"
import node from "../assets/technology/node.svg"
import post from "../assets/technology/Postgres.svg"
import javascript from "../assets/technology/js.svg"
import go from "../assets/technology/go.svg"
import express from "../assets/technology/express.svg"
import framer from "../assets/technology/framer.svg"
import fast from "../assets/technology/fast.svg"
import mongo from "../assets/technology/mongo.svg"
import { CiLocationOn } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { FaMinus } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoTerminal } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import serksaI from "../assets/technology/ui.png"
import seerksaII from "../assets/technology/ui1.png"
export const SkillDetail = [
    {
        id: 1,
        name: "Javascript",
        icon: javascript,
    },
    {
        id: 2,
        name: "Python",
        icon: python,
    },
    {
        id: 3,
        name: "Node",
        icon: node,
    },
    {
        id: 4,
        name: "GoLang",
        icon: go,
    },
    {
        id: 5,
        name: "PostgreSQL",
        icon: post,
    },
    {
        id: 6,
        name: "MongoDB",
        icon: mongo,
    },
]
export const framework = [
    {
        id: 1,
        name: "React",
        icon: react,
    },
    {
        id: 2,
        name: "Express",
        icon: express,
    },
    {
        id: 3,
        name: "FastAPI",
        icon: fast,
    },
    {
        id: 4,
        name: "Framer Motion",
        icon: framer,
    },
]
export const description = [
    {
        id: 1,
        detail: "# User Profile: Ry Satya",
    },
    {
        id: 2,
        detail: "> Name: Ry Satya",
    },
    {
        id: 3,
        detail: "> Major: Software Engineer  ",
    },
    {
        id: 4,
        detail: "> Age: 19 (Born: Oct 31, 2005)  ",
    },
    {
        id: 5,
        detail: "> Address: Boeung Chhuk village,  Niroth commune, Cbar ompov  district, Phnom Penh",
    },
    {
        id: 6,
        detail: "## 📌 Objective:",
    },
    {
        id: 7,
        detail: "I want to develop impactful software solutions that bridge gaps in education and technology, while continuously honing technical expertise and contributing to meaningful project",
    },
    {
        id: 8,
        detail: "-----------------------------------",
    },
    {
        id: 9,
        detail: "## 👾 Technical Skills:",
    },
    {
        id: 10,
        detail: "> Languages: JavaScript, TypeScript, Python  ",
    },
    {
        id: 11,
        detail: "> Frontend: React, Zustand, ",
    },
    {
        id: 12,
        detail: "> Backend: Python, Node.js, Firebase",
    },
    {
        id: 13,
        detail: "> Framework & Libraries: Framer motion, FastAPI",
    },
    {
        id: 14,
        detail: "> Databases: Firestore, MongoDB  PostgreSQL",
    },
    {
        id: 15,
        detail: "> Version Control: Git, GitHub  ",
    },
    {
        id: 16,
        detail: "> Other Tools: Vite, Figma, Postman",
    },
    {
        id: 17,
        detail: "-----------------------------------",
    },
    {
        id: 18,
        detail:"[user@Users-MacBook-Pro/Satyary@217 ~ % Type cd projects to check projects",
    },
]
export const icon =[
    {
        id: 1,
        icon: <CiLocationOn fontSize={"1.5rem"} color="#64ffda"/>,
        detail: "PhnomPenh,Cambodia"
    },
    {
        id: 2,
        icon: <IoIosLink fontSize={"1.5rem"} color="#64ffda"/>,
        detail: "satyary.dev"
    },
    {
        id: 3,
        icon: <CiFacebook fontSize={"1.5rem"} color="#64ffda"/>,
        detail: "Facebook"
    },
]

export const MacSymbol = [
    {
      background: "#EE4E4E",
      icon: <ImCross fontSize={"10px"}/>
    },
    {
      background: "#FABC3F",
      icon: <FaMinus fontSize={"12px"}/>
    },
    {
      background: "#A1DD70",
      icon: <PiCaretUpDownFill fontSize={"12.5px"}/>
    },
]
export const MenuIcon =[
    {
        id: 1,
        link: "/",
        image: <FaHome fontSize={"3.5rem"} color="#181C14"/>,
    },
    {
        id: 2,
        link: "/about",
        image: <IoTerminal fontSize={"3.5rem"} color="black"/>,
    },
    {
        id: 3,
        link: "/skill",
        image: <VscVscodeInsiders fontSize={"3.5rem"} color ="#0078d7"/>,
    },
    {
        id: 4,
        link: "/projects",
        image: <FaGithubSquare fontSize={"3.5rem"} color ="#6e5494"/>,
    },
]

export const projectFeature = [
    {
        id: 1,
        projectName:"SerkSa App",
        projectDetail: "",
        firstUI: serksaI,
        secondUI: seerksaII,
    },
    {
        id: 1,
        projectName:"",
        projectDetail: "",
        firstUI: serksaI,
        secondUI: seerksaII,
    },
    {
        id: 1,
        projectName:"",
        projectDetail: "",
        firstUI: serksaI,
        secondUI: seerksaII,
    }
]