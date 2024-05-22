/*Esse código é uma lista de objetos em formato JSON. JSON (JavaScript Object Notation) é um formato leve de troca de dados que é 
fácil de ler e escrever para humanos e fácil de interpretar e gerar para máquinas. 
No caso desse código, ele está sendo utilizado para estruturar os dados dos candidatos e das etapas da eleição de uma 
forma organizada e legível para que possam ser facilmente manipulados por um programa em JavaScript. */

let etapas = [{
        titulo: 'VEREADOR',
        numeros: 5,
        candidatos: [{
                numero: '10001',
                nome: 'JavaScript',
                partido: 'NaN - Not a Number',
                fotos: [
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10002',
                nome: 'GO Lang',
                partido: 'LPR - Losing pointer references',
                fotos: [
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10003',
                nome: 'Elixir',
                partido: 'RM - Recursion Maniacs',
                fotos: [
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10004',
                nome: 'Python',
                partido: 'Loading...',
                fotos: [
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', legenda: 'Vereador', small: false }
                ]
            },
        ]
    },
    {
        titulo: 'PREFEITO',
        numeros: 2,
        candidatos: [{
                numero: '66',
                nome: 'Rust',
                partido: 'BLE - Best lang ever',
                vice: 'Himself',
                fotos: [
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg', legenda: 'Prefeito' },
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg', legenda: 'Vice', small: true },
                ]
            },
            {
                numero: '99',
                nome: 'PHP',
                partido: 'AP - Arr****** Party',
                vice: 'Laravel',
                fotos: [
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', legenda: 'Prefeito' },
                    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', legenda: 'Vice', small: true }
                ]
            },
        ]
    }
];
