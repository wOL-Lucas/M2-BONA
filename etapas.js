/*Esse código é uma lista de objetos em formato JSON. JSON (JavaScript Object Notation) é um formato leve de troca de dados que é 
fácil de ler e escrever para humanos e fácil de interpretar e gerar para máquinas. 
No caso desse código, ele está sendo utilizado para estruturar os dados dos candidatos e das etapas da eleição de uma 
forma organizada e legível para que possam ser facilmente manipulados por um programa em JavaScript. */

let etapas = [{
        titulo: 'VEREADOR',
        numeros: 5,
        candidatos: [{
                numero: '10001',
                nome: 'Storm Trooper que bate a cabeça',
                partido: 'VR - Velha República',
                fotos: [
                    { url: '4.jpg', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10002',
                nome: 'Jabba The Hutt',
                partido: 'GCH - Grande Conselho Hutt',
                fotos: [
                    { url: '1.png', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10003',
                nome: 'Luke Skywalker',
                partido: 'AR - Aliança Rebelde',
                fotos: [
                    { url: '2.png', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10004',
                nome: 'R2-D2',
                partido: 'AR - Aliança Rebelde',
                fotos: [
                    { url: '3.jpg', legenda: 'Vereador', small: false }
                ]
            },
        ]
    },
    {
        titulo: 'PREFEITO',
        numeros: 2,
        candidatos: [{
                numero: '66',
                nome: 'Darth Vader',
                partido: 'VR - Velha República',
                vice: 'Darth Maul',
                fotos: [
                    { url: '66_1.png', legenda: 'Prefeito' },
                    { url: '66_2.png', legenda: 'Vice-Prefeito', small: true },
                ]
            },
            {
                numero: '99',
                nome: 'Chewbacca',
                partido: 'AR - Aliança Rebelde',
                vice: 'Obi-Wan Kenobi',
                fotos: [
                    { url: '99_1.jpg', legenda: 'Prefeito' },
                    { url: '99_2.png', legenda: 'Vice-Prefeito', small: true }
                ]
            },
        ]
    }
];