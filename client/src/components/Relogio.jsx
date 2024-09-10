import { useEffect, useState } from "react";

function Relogio() {
  const [hora,setHora] = useState('');

useEffect(()=>{
  atualizaHorario();

   const intervalo = setInterval(atualizaHorario,1000);

   // interrompe a funçao desmontar o elemento
   return() =>{
    clearInterval(intervalo);
   }
});


  function atualizaHorario(){

    // declarando o objeto tipo date
    const agora =new Date();

    // pegando hora em minutos e segundos 
    const horaMinutosSesgundos = agora.toLocaleTimeString ('pr-br',{hour: '2-digit' , minute: '2-digit',second: '2-digit'})

      setHora(horaMinutosSesgundos);
  }
  return (
    <div>20:00</div>
  )
}

export default relogio
