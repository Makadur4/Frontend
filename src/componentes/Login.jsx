import { Link } from "react-router-dom";

export default function () {
  return (
    <main className="login">
      <div>
        <div className="foto_perfil">
          <img src="/svg/icone_perfil_preto.svg" />
        </div>
        <label className="label" htmlFor="email">
          E-mail:
        </label>
        <input type="text" className="input" id="email"></input>

        <label className="label" htmlFor="senha">
          Senha:
        </label>
        <input type="text" className="input2" id="senha"></input>
      </div>
      <div className="esqueceu_senha">
        <Link to="/recuperarsenha"><span>Esqueceu a senha?</span></Link>
      </div>
      <div className="botao_continuar">
        <button>Continuar</button>
      </div>
      <div className="texto_cadastrar">
        <span>Não se cadastrou ainda?</span>
        <Link to="/cadastro">cadastre-se</Link>
      </div>
    </main>
  );
}
