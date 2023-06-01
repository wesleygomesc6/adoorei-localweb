<template>
  <main>
    <img class="imagem-logo" src="../../public/localweb.png" alt="Logo Localweb" />
    <div class="formulario">
      <form>
        <div class="descricao-form">
          <h2> Entre na sua Conta </h2>
          <span>Para acessar sua conta informe seu e-mail e senha</span>
        </div>
        <div class="inputs">
          <label for="lemail">E-mail</label>
          <input type="email" id="email" name="lemail" placeholder="Seu E-mail" />
          <label for="lsenha">Senha</label>
          <input type="password" id="senha" name="lsenha" placeholder="Sua senha" />
        </div>
        <div class="recuperar-senha">
          <span>Esqueci minha senha</span>
        </div>
        <input class="submit" type="submit" id="login" title="Fazer Login" value="FAZER LOGIN">
      </form>
      <div class="cadastro">
        <span>Ainda não tem conta? <a href="" class="cadastre-se">Cadastre-se</a></span>
      </div>
    </div>
  </main>
</template>
<script>
import Usuario from '@/models/Usuario.ts'
export default {
  data() {
    return {
      usuario: new Usuario()
    }
  },
  methods : {

  }
}
</script>
<style>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width : 600px) {
  main {
    width: 90%;
    margin: auto;
  }
}

.imagem-logo {
  margin: 10px 2px;
  max-height: 40px;
}

.formulario {
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  box-shadow: 3px 2px 3px 2px rgba(50, 50, 50, 0.22);
}

.descricao-form {
  margin: 20px 0px;
}

.inputs {
  margin: 20px 0px;

}

input {
  box-sizing: border-box;
  width: 100%;
  display: block;
  padding: 5px;
  height: 50px;
  margin: 10px 0px;
  border-radius: 5px;
}

.recuperar-senha {
  display: flex;
  justify-content: end;
}

input.submit {
  background-color: var(--cor-primaria);
  color: white;
  border: none;
}

.cadastro {
  display: flex;
  justify-content: center;
  margin: 15px 0px;
}

.cadastre-se {
  color: var(--cor-primaria);

}
</style>
