// CONVERTER A HORA

function converter() {
  const input = document.getElementById("dataHora").value;
  const fuso = parseInt(document.getElementById("fuso").value);
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.innerHTML = "⚠️ Por favor, insira uma data e hora.";
    return;
  }

  // Converter string do input para objeto Date
  let data = new Date(input);

  // Avançar conforme o fuso
  data.setHours(data.getHours() + fuso);

  // Array com os dias da semana
  const diasSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", 
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];

  // Descobrir o dia da semana
  const diaSemana = diasSemana[data.getDay()];

  // Formatar para exibir (YYYY-MM-DD HH:mm)
  const formatado = data.getFullYear() + "-" +
                    String(data.getMonth()+1).padStart(2,"0") + "-" +
                    String(data.getDate()).padStart(2,"0") + " " +
                    String(data.getHours()).padStart(2,"0") + ":" +
                    String(data.getMinutes()).padStart(2,"0");

  resultado.innerHTML = `<strong>A reunião vai acontecer <em>${diaSemana}</em> de ${formatado}</strong>.<br>‼️ Data da reunião convertida para a data de Minas Gerais, Brasil.`;
}


// ABRIR E FECHAR MENU 


const menu = document.getElementById("menu");
const tela = document.getElementById("section");
function abrir_menu(){
    menu.style.left = "0";
    tela.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.92)), url(clock.jpg)";
}
function fechar_menu(){
    menu.style.left = "-70%";
    tela.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.767)), url(clock.jpg)";
}















