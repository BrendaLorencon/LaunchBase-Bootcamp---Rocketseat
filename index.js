// Criar um programa que calcula a média
// das turmas de alunos e envia 
// mensagem do cálculo da média.


const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 1.8
    },
    {
        nome: "Brenda",
        nota: 5
    },
    {   
        nome: "Eder",
        nota: 3
    }
]

const alunosDaTurmaB = [
    {
        nome: "Joao",
        nota: 5
    },
    {
        nome: "Leonardo",
        nota: 10
    },
    {   
        nome: "Felipe",
        nota: 10
    }
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A média da  ${turma} foi de ${media}. Parabéns.`)
    } else {
        console.log(`A média da  ${turma} é menor que 5.`)
    }

}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')




