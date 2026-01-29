// Array de pedidos simulando dados vindos do sistema ou backend
const pedidos = [
  { id: 1, valor: 120, pago: true },
  { id: 2, valor: 80, pago: false },
  { id: 3, valor: 250, pago: true },
  { id: 4, valor: 60, pago: true }
];

// Função responsável por gerar o relatório financeiro dos pedidos
function gerarRelatorioPedidos(pedidos) {

  // Filtra apenas os pedidos que estão pagos
  // Aqui o sistema ignora pedidos ainda não finalizados
  const pedidosPagos = pedidos.filter(pedido => {
    return pedido.pago === true;
  });

  // Filtra apenas pedidos com valor maior ou igual a 100
  // Regra de negócio definida pelo time financeiro
  const pedidosValidos = pedidosPagos.filter(pedido => {
    return pedido.valor >= 100;
  });

  // Cria um novo array aplicando a taxa de 10%
  // E retornando apenas os dados necessários para o relatório
  const relatorio = pedidosValidos.map(pedido => {
    return {
      id: pedido.id, // Mantém o identificador do pedido
      valorFinal: pedido.valor * 1.10 // Aplica 10% de taxa
    };
  });

  // Retorna o relatório final processado
  return relatorio;
}

// Executa a função passando o array de pedidos
const resultado = gerarRelatorioPedidos(pedidos);

// Exibe o resultado final no console
console.log(resultado);
