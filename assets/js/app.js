import{calculaEnergia}from"./calculos/energia.js";import{calculaJuros}from"./calculos/juros.js";const jurosForm=document.querySelector("#jurosForm"),energiaForm=(jurosForm.addEventListener("submit",r=>{r.preventDefault(),calculaJuros(jurosForm)}),document.querySelector("#energiaForm"));energiaForm.addEventListener("submit",r=>{r.preventDefault(),calculaEnergia(energiaForm)});