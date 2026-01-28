// Array de usuários recebido pelo sistema (dados vindos do backend ou banco)
const usuarios = [
  { nome: "Ana", idade: 22, ativo: true },
  { nome: "João", idade: 16, ativo: true },
  { nome: "Carlos", idade: 30, ativo: false },
  { nome: "Bea", idade: 25, ativo: true }
];

// Função responsável por gerar o relatório de usuários válidos
function gerarRelatorioUsuarios(usuarios) {

  // Aqui filtramos apenas os usuários que estão ativos
  // É como verificar quem ainda tem cadastro ativo no sistema
  const usuariosAtivos = usuarios.filter(usuario => {
    // Se o usuário estiver ativo, ele passa no filtro
    return usuario.ativo === true;
  });

  // Agora filtramos apenas os usuários maiores de idade
  // É como uma regra da empresa: só maiores de 18 podem continuar
  const usuariosValidos = usuariosAtivos.filter(usuario => {
    return usuario.idade >= 18;
  });

  // Aqui transformamos o array de objetos em um array só de nomes
  // E colocamos todos os nomes em letras maiúsculas
  const nomes = usuariosValidos.map(usuario => {
    // Pegamos apenas o nome e convertemos para MAIÚSCULO
    return usuario.nome.toUpperCase();
  });

  // Retornamos o resultado final do sistema
  return nomes;
}

// Executamos a função passando o array de usuários
const resultado = gerarRelatorioUsuarios(usuarios);

// Exibimos o resultado no console
console.log(resultado);
// Saída esperada: ["ANA", "BEA"]

// Explicação passo a passo:    
// 1. Filtramos os usuários ativos: Ana, João, Bea
// 2. Desses, filtramos os maiores de idade: Ana (22), Bea (25)
// 3. Pegamos os nomes e colocamos em maiúsculo: ["ANA", "BEA"]
// 4. Retornamos esse array como resultado final do sistema
// Assim, o sistema de gestão de usuários funciona corretamente!
// Fim do código.

