// script.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyAgGy1jQghGCTN0XtTQykdLR031Gg0Ry58";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run(prompt) {
    Swal.fire({
        title: 'Carregando',
        html: 'Espere um momento',
        didOpen: () => {
            Swal.showLoading()
        }
    });

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    document.querySelector("#txt-gerado").innerHTML = text;
    Swal.close();
}