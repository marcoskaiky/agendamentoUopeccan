
const tabela = document.getElementById("tabela");


const btnPesquisar = document.getElementById("botao");


const agendamentos = [
    { id: 1, paciente: 'Ana Silva', especialidade: 'Cardiologia', telefone: '11987654321', dataAgendamento: '2024-12-06', medico: 'Dr. Carlos Mendes' },
    { id: 2, paciente: 'Carlos Souza', especialidade: 'Dermatologia', telefone: '11987654322', dataAgendamento: '2024-11-15', medico: 'Dra. Beatriz Costa' },
    { id: 3, paciente: 'Mariana Costa', especialidade: 'Ortopedia', telefone: '11987654323', dataAgendamento: '2024-10-23', medico: 'Dr. Eduardo Silva' },
    { id: 4, paciente: 'João Oliveira', especialidade: 'Neurologia', telefone: '11987654324', dataAgendamento: '2024-09-19', medico: 'Dr. João Almeida' },
    { id: 5, paciente: 'Lucas Pereira', especialidade: 'Pediatria', telefone: '11987654325', dataAgendamento: '2024-08-30', medico: 'Dra. Lara Martins' },
    { id: 6, paciente: 'Juliana Martins', especialidade: 'Oftalmologia', telefone: '11987654326', dataAgendamento: '2024-07-25', medico: 'Dr. Rafael Lima' },
    { id: 7, paciente: 'Heitor Correa', especialidade: 'Ginecologia', telefone: '11987654327', dataAgendamento: '2024-06-14', medico: 'Dra. Patricia Souza' },
    { id: 8, paciente: 'Carla Souza', especialidade: 'Odontologia', telefone: '11987654328', dataAgendamento: '2024-05-11', medico: 'Dr. Bruno Costa' },
    { id: 9, paciente: 'Fernanda Rocha', especialidade: 'Pneumologia', telefone: '11987654329', dataAgendamento: '2024-04-07', medico: 'Dr. Marcos Silva' },
    
];


function filtrarAgendamentos(dataInicio, dataFim) {
    const agendamentosFiltrados = agendamentos.filter(agendamento => {
        const dataAgendamento = new Date(agendamento.dataAgendamento);
        return (!dataInicio || dataAgendamento >= dataInicio) && (!dataFim || dataAgendamento <= dataFim);
    });
    exibirAgendamentos(agendamentosFiltrados);
}


function exibirAgendamentos(listaAgendamentos) {
    const tabelaBody = listaAgendamentos.map((agendamento) => {
        return `<tr>
            <th scope="row">${agendamento.id}</th>
            <td>${agendamento.paciente}</td>
            <td>${agendamento.especialidade}</td>
            <td>${agendamento.telefone}</td>
            <td data-agendamento="${agendamento.dataAgendamento}">${agendamento.dataAgendamento}</td>
            <td>${agendamento.medico}</td>
        </tr>`;
    }).join('');
    tabela.innerHTML = tabelaBody;
}


btnPesquisar.addEventListener('click', function () {
    const dataInicio = new Date(document.getElementById('dataInicio').value);
    const dataFim = new Date(document.getElementById('dataFim').value);
    filtrarAgendamentos(dataInicio, dataFim);
});
