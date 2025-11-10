import readline = require("readline-sync");
import {colors} from './src/util/colors';
import {Conta} from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main(){
    let opcao: number;

    const conta: Conta = new Conta(11287, 1232, 1, "Maria", 15000);
    conta.visualizar();
    conta.sacar(20000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar();

    const contaCorrente: ContaCorrente = new ContaCorrente(12314, 4020, 1, "Everson Globos Oculares", 28370, 5000,)
    contaCorrente.visualizar();
    contaCorrente.sacar(32000);
    contaCorrente.visualizar();
    contaCorrente.sacar(50050);
    contaCorrente.visualizar();
    contaCorrente.depositar(5000);
    contaCorrente.visualizar();

    const contaPoupanca: ContaPoupanca = new ContaPoupanca(28910, 7281, 2, "Felipe Tataraneto", 2130, 3);
    contaPoupanca.visualizar();
    contaPoupanca.sacar(20000);
    contaPoupanca.visualizar();
    contaPoupanca.sacar(10500);
    contaPoupanca.visualizar();
    contaPoupanca.depositar(5000);
    contaPoupanca.visualizar();

    

    while(true){
        console.log(colors.bg.black, colors.fg.yellow,
                  "\n************************************************");
        console.log("                                                ");
        console.log("           BANCO DO BRAZIL COM Z                ");
        console.log("                                                ");
        console.log("************************************************");
        console.log("                                                ");
        console.log("       1 - Criar Conta                          ");
        console.log("       2 - Listar todas as Contas               ");
        console.log("       3 - Buscar Conta por Numero              ");
        console.log("       4 - Atualizar dados da Conta             ");
        console.log("       5 - Apagar Conta                         ");
        console.log("       6 - Sacar                                ");
        console.log("       7 - Depositar                            ");
        console.log("       8 - Transferir valores entre Contas      ");
        console.log("       9 - Sair                                 ");
        console.log("                                                ");
        console.log("************************************************");
        console.log("                                                ",
            colors.reset);
        opcao = readline.questionInt("Opção: ")
        if (opcao === 9){
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com z - O seu futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            break;
        }

        switch(opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);
                
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);
                
                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);
                
                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);
                
                keyPress();
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\n\nOpção Inválida", colors.reset)
                
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Kali França - cbjk.kali@gmail.com");
    console.log("github.com/lf-kali");
    console.log("************************************************\n");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main();