const terceiroComponente = () => {
    const professor = {
        nome: "Eberson",
        formação: "Fundador de IA",
        idade: 38,
        titular: true
    };

    return (
        <>
            <p>
                <h3>Professor</h3>
                <strong>Nome: </strong>{professor.nome} <br />
                <strong>Formação: </strong>{professor.profissão} <br />
                <strong>Idade: </strong>{professor.idade} <br />
                <strong>titular: </strong>{professor.casado}
            </p>
        </>
    );
}

export default terceiroComponente;