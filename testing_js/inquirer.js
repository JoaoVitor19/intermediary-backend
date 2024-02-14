import inquirer from "inquirer";

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'nome',
            message: 'Qual seu nome?'
        },
        {
            type: 'list',
            name: 'idade',
            message: 'Qual sua idade?',
            choices: [
                "0 a 18",
                "18+"
            ]
        }
    ]
).then((answers) => {
    console.log(`Oi ${answers.nome} com ${answers.idade} anos de vida!`);
});