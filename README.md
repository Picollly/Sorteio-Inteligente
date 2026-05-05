# 🎁 Sorteio Inteligente (Sorteador de Amigo Secreto)

Este projeto é uma aplicação web interativa para organização de sorteios de Amigo Secreto.  
O foco principal do desenvolvimento foi a implementação de uma lógica de sorteio eficiente e uma interface de usuário intuitiva e responsiva.

---

## 🚀 Funcionalidades

- ✅ **Gestão de Participantes**  
  Adição dinâmica de nomes com validações de entrada (impede nomes vazios ou duplicados).

- 📋 **Regras de Negócio**  
  O sistema exige um mínimo de **4 participantes** para garantir a viabilidade do sorteio.

- 🎲 **Sorteio Inteligente**  
  Realiza o cruzamento de nomes de forma aleatória, garantindo que nenhum participante tire a si mesmo.

- 🔄 **Reset de Estado**  
  Permite limpar todas as listas e reiniciar o processo sem necessidade de recarregar a página.

---

## 🧠 Destaque Técnico: Algoritmo de Embaralhamento

Para garantir aleatoriedade real e imparcialidade, foi utilizado o **Algoritmo de Fisher-Yates**.

> O algoritmo funciona percorrendo a lista de trás para frente, trocando o elemento atual por um elemento aleatório anterior a ele.  
> Isso garante que todas as permutações possíveis da lista sejam igualmente prováveis.

---

## 🛠️ Tecnologias Utilizadas

<p>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-Structure-orange?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-Style-blue?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Normalize.css-Consistency-lightgrey" />
</p>

- **JavaScript (ES6+)** → Lógica, manipulação de DOM e algoritmos  
- **HTML5 & CSS3** → Estruturação e estilização  
- **Normalize.css** → Consistência entre navegadores  

---

## 📎 Autor

Desenvolvido por **Giancarlo**
