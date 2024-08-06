# Tradutor de Idiomas com OpenAI e NodeJS

Este é um projeto de tradutor de idiomas simples utilizando a API da OpenAI com NodeJS e TypeScript. O projeto permite
traduzir textos de um idioma para outro, utilizando os modelos de linguagem da OpenAI.

## Pré-requisitos

- NodeJS (versão 14 ou superior)
- npm (geralmente instalado junto com o NodeJS)
- Conta na OpenAI com uma chave de API válida

## Configuração do Projeto

### 1. Clonar o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/leoportogtr86/tradutor-node-openai
cd tradutor-node-openai
```

### 2. Instalar Dependências

Instale as dependências necessárias:

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenAI:

```
OPENAI_API_KEY=sua_chave_aqui
```

### 4. Estrutura do Projeto

A estrutura de pastas e arquivos do projeto é a seguinte:

```
tradutor-idiomas/
│
├── src/
│   ├── index.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Como Executar

Para executar o projeto, use o seguinte comando:

```bash
npm start
```

### Exemplo de Uso

O projeto inclui um exemplo básico de uso no arquivo `src/index.ts`:

```typescript
import {OpenAI} from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function translateText(text: string, targetLanguage: string): Promise<string> {
    const prompt = `Translate the following text to ${targetLanguage}:\n\n${text}`;

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: `You are a translator that converts text to ${targetLanguage}.`
            },
            {
                role: 'user',
                content: prompt
            }
        ]
    });

    return response.choices[0].message.content.trim();
}

async function main() {
    const textToTranslate = "Hello, how are you?";
    const targetLanguage = "Spanish";

    try {
        const translatedText = await translateText(textToTranslate, targetLanguage);
        console.log(`Original Text: ${textToTranslate}`);
        console.log(`Translated Text: ${translatedText}`);
    } catch (error) {
        console.error('Error translating text:', error);
    }
}

main();
```

Este exemplo traduz a frase "Hello, how are you?" para o espanhol.

## Personalização

Você pode personalizar o projeto de acordo com suas necessidades:

- Modificar os idiomas de origem e destino
- Integrar com uma interface de usuário
- Adicionar suporte a múltiplos idiomas
- Melhorar o tratamento de erros
