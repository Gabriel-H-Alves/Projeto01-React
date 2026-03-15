import {useState, useEffect} from "react";
function App() {
  //ex 01
  let nome = "João";

  //ex 02
  let idade = "25"

  //ex 03
  let num1 = 7
  let num2 = 8

  //ex 04
  let cidade = "São Paulo"
  let pais = "Brasil"

  //ex 05
  let estudandoReact = "true"

  //ex 06
  let name = "Maria"
  let age = "79"
  let profissao = "Professora"

  //Ex 07
  let product = "Notebook"
  let price = "R$ 3.500"

 //Ex 08
 let saudacao = "Bom dia, "

 let names= "Carlos!"

 //Ex 09
 let numero1 = 5
 let numero2 = 8

// Ex 10

let ano = "2026"

// Ex 11
let nomes = "Lucas"
let cursos = "React"
let escola = "Flamingo"

// Ex 12
let anoNascimento = "2006"
let anoAtual = "2026"

// Ex 13
let numeroFavorito = "25"

// Ex 14
let temperatura = "28"
let city = "Rio de Janeiro"

// Ex 15

let nome01 = "Enzo"
let idade01 = "20"
let hobby = "Montar cubo mágico"

  return (
    <>
    {/* Ex 01 */}
      <h2>Meu nome é {nome}!</h2>
      <hr />
     {/* Ex 02 */}
      <h2>Eu tenho {idade} anos!</h2>
      <hr />
      {/* Ex03 */}  
      <h2>o valor de {num1 + num2 }</h2>
      <hr />
{/*       
      Ex04 */}
      <h2>Eu moro em {cidade + pais }</h2>
 <hr />
 {/* Ex05 */}
      <h2>Estou  Estudando react? { estudandoReact }</h2>
<hr />
 {/* Ex 06 */}
   <h2>Nome: {name}</h2>
   <h2>idade: {age}</h2>
   <h2>profissao: {profissao}</h2>
<hr />

{/* Ex 07 */}
<h2>Produto: {product}</h2>
<h2>Preço: {price}</h2>
<hr />

{/* Ex 08 */}
<h2>{saudacao + names}</h2>
<hr />

{/* Ex 09 */}
<h2>Multiplicação: {numero1 * numero2}</h2>
<hr />
{/* EX 10 */}
<h2>Estamos no ano de {ano}</h2>
<hr />

{/* Ex 11 */}
<h2>{nomes} estuda {cursos} na {escola}</h2>
<hr />
{/* Ex 12 */}

<h2> Idade Aproximada: {anoAtual - anoNascimento }</h2>
<hr />

{/* Ex 13 */}
<h2> Meu número favorito é {numeroFavorito}</h2>
<hr />

{/* Ex14 */}

<h2>A temperatura do {city} é {temperatura}ºC</h2>
<hr />

{/* Ex 15 */}

<h2>Perfil </h2>
<p>Nome: {nome01}</p>
<p>Idade: {idade01}</p>
<p>Hobby: {hobby}</p>






    </>
  )
}

export default App
