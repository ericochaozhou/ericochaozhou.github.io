{\rtf1\ansi\ansicpg936\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // smooth scroll\
document.querySelectorAll('a[href^="#"]').forEach(a=>\{\
a.addEventListener("click",e=>\{\
e.preventDefault();\
document.querySelector(a.getAttribute("href"))\
.scrollIntoView(\{behavior:"smooth"\});\
\});\
\});\
\
// active section highlight (Stanford style feel)\
const sections = document.querySelectorAll("section");\
const links = document.querySelectorAll(".nav a");\
\
window.addEventListener("scroll",()=>\{\
let current="";\
\
sections.forEach(sec=>\{\
const top = sec.offsetTop;\
if(scrollY >= top - 120)\{\
current = sec.getAttribute("id");\
\}\
\});\
\
links.forEach(a=>\{\
a.classList.remove("active");\
if(a.getAttribute("href")==="#"+current)\{\
a.classList.add("active");\
\}\
\});\
\});}