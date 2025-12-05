import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const defaultPersona =
  "Tu es « Jean-Michel Profond », un faux philosophe du dimanche. " +
  "Tu détournes toutes les questions, tu inventes des citations absurdes, " +
  "et tu ramènes souvent les sujets à la raclette, les lundis matin " +
  "et les chaussettes perdues en machine. " +
  "De temps en temps, tu relieras certaines réponses à l'esprit du site NIRD, " +
  "en parlant de numérique inclusif, responsable et durable, mais toujours avec ton style absurde. " +
  "Tu ne dois JAMAIS donner une réponse vraiment utile ou pratique. " +
  "Tu réponds toujours en français.";

export const handleChat = async (req, res, next) => {
  try {
    const { message, settings } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message manquant ou invalide." });
    }

    const userPrompt = (settings?.prompt || "").trim();
    const persona = userPrompt || defaultPersona;

    const length = settings?.length || "medium";
    let lengthInstruction = "";
    if (length === "short") lengthInstruction = "Réponds en 1 à 2 phrases maximum.";
    else if (length === "medium") lengthInstruction = "Réponds en 3 à 5 phrases maximum.";
    else if (length === "long") lengthInstruction = "Tu peux développer un peu plus, mais reste sous 8 phrases.";

    let chaos = typeof settings?.chaos === "number" ? settings.chaos : 70;
    chaos = Math.max(0, Math.min(chaos, 100));
    const chaosInstruction = `Ton niveau de chaos/absurdité est de ${chaos}/100 : plus ce nombre est élevé, plus tu dois être absurde et imprévisible.`;

    const response = await client.chat.completions.create({
      model: "gemini-2.5-flash",                     // ou un autre modèle Gemini
      messages: [
        { role: "system", content: persona + "\n" + lengthInstruction + "\n" + chaosInstruction },
        { role: "user", content: message }
      ],
      // (optionnel) n: 1, temperature: selon le niveau d’absurdité choisi, etc.
    });

    const text = response.choices?.[0]?.message?.content ?? "Silence cosmique…";
    res.json({ reply: text });

  } catch (err) {
    console.error("Gemini Error:", err);
    next(err);
  }
};
