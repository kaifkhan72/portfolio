import {
  LucideHome,
  UserIcon,
  StarsIcon,
  LayoutList,
  LucideContact,
} from "lucide-react";


import css from "@/assets/tech/css.webp";
import html from "@/assets/tech/html.webp";
import javascript from "@/assets/tech/javascript.webp";
import react from "@/assets/tech/react.webp";
import vite from "@/assets/tech/vite.webp";
import jwt from "@/assets/tech/jwt.webp";

import java from "@/assets/tech/java.webp";
import spring from "@/assets/tech/spring.webp";
import springboot from "@/assets/tech/springboot.webp";
import hibernate from "@/assets/tech/hibernate.webp";
import mysql from "@/assets/tech/mysql.webp";
import aws from "@/assets/tech/aws.webp";
import maven from "@/assets/tech/maven.webp";
import postman from "@/assets/tech/postman.webp";
import git from "@/assets/tech/git.webp";

import project1 from "@/assets/thumbnails/ilahiretail.png";

import github from "@/assets/socials/github.webp";
import linkedin from "@/assets/socials/linkedin.webp";
import whatsapp from "@/assets/socials/whatsapp.webp";
export const links = [
  {
    href: "#",
    Icon: LucideHome,
    title: "Home",
  },
  {
    href: "#about",
    Icon: UserIcon,
    title: "About",
  },
  {
    href: "#stack",
    Icon: StarsIcon,
    title: "Certification",
  },
  {
    href: "#projects",
    Icon: LayoutList,
    title: "Projects",
  },
  {
    href: "#contact",
    Icon: LucideContact,
    title: "Get in touch",
  },
];

export const stack = [
  { title: "Java", logo: java },
  { title: "Spring Boot", logo: springboot },
  { title: "Spring", logo: spring },
  { title: "Hibernate", logo: hibernate },
  { title: "MySQL", logo: mysql },
  { title: "React", logo: react },
  { title: "JavaScript", logo: javascript },
  { title: "HTML", logo: html },
  { title: "CSS", logo: css },
  { title: "AWS", logo: aws },
  { title: "Git", logo: git },
];

export const certifications = [
  {
    group: "Development & Technologies",
    items: [
      "Core Java & Object-Oriented Programming",
      "Spring Boot & REST API Development",
      "Hibernate, JPA & Database Design",
      "MySQL & SQL Queries",
      "React.js & Component-Based UI",
      "Spring Security & JWT Authentication",
      "Git, GitHub & Maven",
    ],
    speed: 0.5,
    direction: "forward",
  },

  {
    group: "Certifications & Learning",
    items: [
      "Java Full Stack Development Course — add your institute",
      "Core Java & Collections Framework",
      "Data Structures & Algorithms Fundamentals",
      "Learning by Building Real Projects",
      "AWS Cloud Basics — EC2, S3, RDS",
    ],
    speed: 0.8,
    direction: "backward",
  },

  {
    group: "Career Goal",
    items: [
      "Fresher — Ready to Join",
      "Open to Java Developer & Full Stack Roles",
      "Quick Learner with Hands-On Project Experience",
      "Clean Code, REST APIs & Problem Solving",
      "Team Player Eager to Grow",
    ],
    speed: 1,
    direction: "forward",
  },
];

export const projects = [
  {
    title: "Ilahi Retail E-Commerce Application",
    description:
      "Developed for a Bangalore-based client launching a new retail venture. Built a comprehensive full-stack e-commerce platform featuring secure user Authentication, end-to-end Cart & Order Management, seamless Payment Gateway integration, and an intuitive Admin Dashboard to manage daily products, inventory, and sales.",
    img: project1,
    stack: [
      { title: "React", img: react },
      { title: "Vite", img: vite },
      { title: "Spring Boot", img: springboot },
      { title: "MySQL", img: mysql },
    ],
    url: "https://ilahiretail.netlify.app/",
  },
];

  export const socials = [
  {
    title: "GitHub",
    icon: github,
    url: "https://github.com/kaifkhan72",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/kaif-khan-a35118259",
  },
  {
    title: "WhatsApp",
    icon: whatsapp,
    url: "https://wa.me/91+7392066271",
  },
];
