def executar_ia_adivinhacao():
    print("=" * 55)
    print("      MINI-IA: ÁRVORE DE DECISÃO INTERATIVA      ")
    print("=" * 55)
    print("Pense em um destes animais: LEÃO, TUBARÃO, ÁGUIA ou CACHORRO.")
    print("Responda apenas com 's' (sim) ou 'n' (não).\n")

    # BASE DE CONHECIMENTO (Estrutura da Árvore de Decisão)
    arvore_conhecimento = {
        "pergunta": "O animal vive na água?",
        "sim": {
            "pergunta": "O animal é grande?",
            "sim" :{
                "palpite": "Tubarão"
            },
            "nao" : {
                "palpite" : "Tilápia"
            }
        },
        "nao": {
            "pergunta": "O animal consegue voar?",
            "sim": {
                "palpite": "Águia"
            },
            "nao": {
                "pergunta": "O animal é considerado um pet doméstico?",
                "sim": {
                    "pergunta": "O animal mia?",
                    "nao": {
                        "palpite": "Cachorro"
                    },

                    "sim": {
                        "palpite": "Gato"
                    }
                },
                "nao": {
                    "palpite": "Leão"
                }
            }
        }
    } 

# MOTOR DE INFERÊNCIA (Navegação na Árvore)
    no_atual = arvore_conhecimento

    while "pergunta" in no_atual:
        resposta = input(f"{no_atual['pergunta']} (s/n): ").lower().strip()

        if resposta == 's':
            no_atual = no_atual["sim"]
        elif resposta == 'n':
            no_atual = no_atual["nao"]
        else:
            print("Entrada inválida! Digite apenas 's' para sim ou 'n' para não.\n")

    # CONCLUSÃO DA IA (Nó Folha)
    print("\n" + "=" * 55)
    print(f"Palpite da IA: Você pensou no(a) {no_atual['palpite']}!")
    print("=" * 55)

if __name__ == "__main__":
    executar_ia_adivinhacao()
# async