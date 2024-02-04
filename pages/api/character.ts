import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
    image: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const data = [
        {
            "name": "Astra",
            "image": require("/public/character/Astra_Artwork_Full.webp")
        },
        {
            "name": "Breach",
            "image": require("/public/character/Breach_Artwork_Full.webp")
        },
        {
            "name": "Brimstone",
            "image": require("/public/character/Brimstone_Artwork.webp")
        },
        {
            "name": "Chamber",
            "image": require("/public/character/Chamber_Artwork.webp")
        },
        {
            "name": "Cypher",
            "image": require("/public/character/Cypher_Artwork.webp")
        },
        {
            "name": "Deadlock",
            "image": require("/public/character/Deadlock_Artwork.webp")
        },
        {
            "name": "Fade",
            "image": require("/public/character/Fade_Artwork.webp")
        },
        {
            "name": "Gekko",
            "image": require("/public/character/Gekko_Artwork.webp")
        },
        {
            "name": "Harbor",
            "image": require("/public/character/Harbor_Artwork.webp")
        },
        {
            "name": "Iso",
            "image": require("/public/character/Iso_Artwork.webp")
        },
        {
            "name": "Jett",
            "image": require("/public/character/Jett_Artwork.webp")
        },
        {
            "name": "Kayo",
            "image": require("/public/character/KAYO_Artwork.webp")
        },
        {
            "name": "Killjoy",
            "image": require("/public/character/Killjoy_Artwork.webp")
        },
        {
            "name": "Neon",
            "image": require("/public/character/Neon_Artwork.webp")
        },
        {
            "name": "Omen",
            "image": require("/public/character/Omen_Artwork.webp")
        },
        {
            "name": "Phoenix",
            "image": require("/public/character/Phoenix_Artwork.webp")
        },
        {
            "name": "Raze",
            "image": require("/public/character/Raze_Artwork.webp")
        },
        {
            "name": "Reyna",
            "image": require("/public/character/Reyna_Artwork.webp")
        },
        {
            "name": "Sage",
            "image": require("/public/character/Sage_Artwork.webp")
        },
        {
            "name": "Skye",
            "image": require("/public/character/Skye_Artwork.webp")
        },
        {
            "name": "Sova",
            "image": require("/public/character/Sova_Artwork.webp")
        },
        {
            "name": "Viper",
            "image": require("/public/character/Viper_Artwork.webp")
        },
        {
            "name": "Yoru",
            "image": require("/public/character/Yoru_Artwork.webp")
        },
    ];
    const randomIndex = Math.floor(Math.random() * data.length);
    res.status(200).json(data[randomIndex]);
}