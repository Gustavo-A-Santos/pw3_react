import terceiroComponente from "./terceiroComponente";

const segundoComponente = () => {
    const aluno = {
        nome: "Gustavo Afonso dos Santos",
        profissão: "Devops",
        idade: 28,
        casado: true
    }
    return (
        <>
            <p>
                <h3>Aluno</h3>
                <strong>Nome: </strong>{aluno.nome} <br />
                <strong>Profissão: </strong>{aluno.profissão} <br />
                <strong>Idade: </strong>{aluno.idade} <br />
                <strong>Casado: </strong>{aluno.casado}
            </p>
            <p>
                <terceiroComponente/>
            </p>
        </>
    );
}

export default segundoComponente;