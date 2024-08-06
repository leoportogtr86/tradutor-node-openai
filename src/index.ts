import {OpenAI} from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function translateText(text: string, targetLanguage: string): Promise<string> {
    const prompt = `Traduza o seguinte texto para ${targetLanguage}: ${text}`;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `Você é um tradutor muito experiente que converte textos para o ${targetLanguage}`
            },
            {
                role: "user",
                content: prompt
            },
        ]
    })

    // @ts-ignore
    return response.choices[0].message.content.trim();
}

async function main() {
    const textToTranslate = "Hello, how are you?";
    const targetLanguage = "Germany";

    try {
        const translatedText = await translateText(textToTranslate, targetLanguage);
        console.log(`Original Text: ${textToTranslate}`);
        console.log(`Translated Text: ${translatedText}`);
    } catch (error) {
        console.error('Error translating text:', error);
    }
}

main();
