import { useEffect, useState } from "react";

function Saudacao() {
  // criando estado da saudação
  const [SaudacaoPeriodo, setSaudacaoPeriodo] = useState('');

  // função que atualiza o texto da saudação
  function atualizaSaudacao() {
    // declarando o objeto do tipo Date
    const agora = new Date();

    // obtendo hora inteira
    const hora = agora.getHours();

    // obtendo dia da semana
    const dia = agora.getDay();

    // declarando variável texto saudação
    let textoSaudacao = '';

    const diaSemana = [
      'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];

    // adicionando o dia da semana ao texto de saudação
    textoSaudacao = diaSemana[dia];

    if (hora >= 18) {
      textoSaudacao += ' - Boa noite!';
    } else if (hora >= 12) {
      textoSaudacao += ' - Boa tarde!';
    } else if (hora >= 7) {
      textoSaudacao += ' - Bom dia!';
    } else {
      textoSaudacao += ' - Boa madrugada!';
    }

    // atualizando o estado
    setSaudacaoPeriodo(textoSaudacao);
  }

  // useEffect para atualizar a saudação quando o componente for montado
  useEffect(() => {
    atualizaSaudacao();
  }, []); // o array vazio faz o useEffect rodar apenas uma vez na montagem

  return (
    <h1>{SaudacaoPeriodo}</h1>
  );
}

export default Saudacao;
