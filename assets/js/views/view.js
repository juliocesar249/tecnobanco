function mostraResultado(t,e){e.place.innerHTML=`
        <p class="result__texto">R$${t.toString().replace(".",",")}</p>
    `}export{mostraResultado};