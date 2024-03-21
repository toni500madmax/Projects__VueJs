<script setup>
import { reactive } from 'vue';

const title__header = "Olá mundo, estou renderizando uma String no Vue.js!"
const obj = {
  nome: "Antonio",
  curso: [ "Frontend", "Backend" ]
};

function toStringObj() {
  return `Nome: ${obj.nome}, faz o curso de ${obj.curso[ 0 ]} e ${obj.curso[ 1 ]}.`;
}

const link__img = "https://s2-g1.glbimg.com/P6-Gw0KmcFCO3ZHlSX06vVGdB0Y=/0x0:6000x4000/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/m/U/1UvLUASZAevRCb1TBygQ/the-batman-robert-pattinson.jpeg";
const btn__disabled = true;

const link__img2 = "https://upload.wikimedia.org/wikipedia/pt/b/be/Super-Homem.jpg";
const diretivas = false;

const condicao__batman = false;
const condicao__superman = true;

const state = reactive({
  contador: 0,
  email1: '',
  email2: '',
  saldo: 5000,
  transferindo: 0,
  nomes: [ "Glen Wheeler", "Marion Wright", "Jose Gonzalez",
    "Harry Brady", "Betty Santiago", "Nell Robinson", "Charlotte James" ],
  novoNome: '',
});
function incrementar() {
  state.contador++;
}
function decrementar() {
  state.contador--;
}

function saldoPosTransferencia() {
  const { saldo, transferindo } = state;
  return saldo - transferindo;
}

function validaTransferencia() {
  const { saldo, transferindo } = state;
  return saldo >= transferindo;
}

function cadastrar() {
  state.nomes.push(state.novoNome);
}
</script>

<template>
  <div class="{{ container }}">
    <h1>
      Para representar códigos javascript de forma direta no elemento<br>é só
      usar a Dulpa Chave { { } } sem espaço.
    </h1>
    <h3 class="{{ h3 }}">{{ title__header }}</h3>
    <h3>{{ 10 + 10 }}</h3>
    <h3>{{ obj }}</h3>
    <h3>{{ toStringObj() }}</h3>
    <h1>
      Para representar valores de atributos de tags como links e imgs<br>
      Usamos a técnica Bind.
    </h1>
    <h3>
      A técnica Bind consiste em no lugar dos atributos colocar:<br>
      >>>> v-bind:(atributo)="chaves duplas" ou só usando os ':';
    </h3>
    <h3>Exemplo: </h3>
    <img v-bind:src="link__img" alt="" class="{{ img__1 }}">
    <button type="button" :disabled="btn__disabled">Enviar mensagem</button>
    <br>
    <hr>
    <br>
    <h3>
      As Diretivas servem pra ajudar a criar lógicas dentro da aplicação
    </h3>
    <img v-if="!diretivas" :src="link__img" alt="" class="{{ img__1 }}">
    <br>
    <hr>
    <br>
    <h3>Dessa forma podemos criar uma lógica simples de uma Condicional: </h3>
    <img v-if="condicao__batman" :src="link__img" alt="">
    <img v-else-if="condicao__superman" :src="link__img2" alt="">
    <h2 v-else>Não curte heróis da DC!</h2>
    <br>
    <br>
    <hr>
    <br>
    {{ state.contador }}
    <button type="button" @click="incrementar">+</button>
    <button type="button" @click="decrementar">-</button>
    <br>
    <hr>
    <br>
    <h3>
      Ao digitar o input irá digitar automaticamente:<br>
      >>{{ state.email1 }}
    </h3>
    <input type="email" @keyup="(event1) => state.email1 = event1.target.value">
    <h3>
      Ao digitar o input irá aparecer depois de sair do foco do input:<br>
      >>{{ state.email2 }}
    </h3>
    <input type="email" @change="(event2) => state.email2 = event2.target.value">
    <p>Podemos criar uma arrow function dentro do valor do atributo, ou criar uma function na tag script.</p>
    <br>
    <hr>
    <br>
    <h3>Condicional para estilos: </h3>
    Saldo: {{ state.saldo }}.<br>
    Transferindo: {{ state.transferindo }}.<br>
    Saldo depois da transferência: {{ saldoPosTransferencia() }} .<br>
    <input class="valid" :class="{ invalid: !validaTransferencia() }"
      @keyup="(event) => state.transferindo = event.target.value" type="number"
      placeholder="quantia para transferência.">

    <p>Se quiser adicionar mais de uma classe com condição é só colocar "," e repetir a sintaxe.</p>
    <br>
    <hr>
    <br>
    <h3>Renderizando Arrays: </h3>
    <p>Através do uso da diretiva v-for</p>
    <ul>
      <li v-for="nome in state.nomes">{{ nome }}</li>
    </ul>
    <input @keyup="event => state.novoNome = event.target.value" type="text" placeholder="Digite mais um nome">
    <button @click="cadastrar" type="submit">Cadastrar nome</button>
  </div>
</template>

<style scoped>
* {
  color: rgb(0, 0, 0);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: normal;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  max-width: 940px;
  width: 100%;
}

.h3 {
  font-size: 26px;
}

.img__1 {
  height: 220px;
}

.invalid {
  outline-color: red;
  border-color: red;
}

.valid {
  outline-color: green;
  border: 2px solid green;
  border-radius: 5px;
}
</style>
