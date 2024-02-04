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
            "image": "/character/Astra_Artwork_Full.webp"
        },
        {
            "name": "Breach",
            "image": "/character/Breach_Artwork_Full.webp"
        },
        {
            "name": "Brimstone",
            "image": "/character/Brimstone_Artwork.webp"
        },
        {
            "name": "Chamber",
            "image": "/character/Chamber_Artwork.webp"
        },
        {
            "name": "Cypher",
            "image": "/character/Cypher_Artwork.webp"
        },
        {
            "name": "Deadlock",
            "image": "/character/Deadlock_Artwork.webp"
        },
        {
            "name": "Fade",
            "image": "/character/Fade_Artwork.webp"
        },
        {
            "name": "Gekko",
            "image": "/character/Gekko_Artwork.webp"
        },
        {
            "name": "Harbor",
            "image": "/character/Harbor_Artwork.webp"
        },
        {
            "name": "Iso",
            "image": "/character/Iso_Artwork.webp"
        },
        {
            "name": "Jett",
            "image": "/character/Jett_Artwork.webp"
        },
        {
            "name": "Kayo",
            "image": "/character/KAYO_Artwork.webp"
        },
        {
            "name": "Killjoy",
            "image": "/character/Killjoy_Artwork.webp"
        },
        {
            "name": "Neon",
            "image": "/character/Neon_Artwork.webp"
        },
        {
            "name": "Omen",
            "image": "/character/Omen_Artwork.webp"
        },
        {
            "name": "Phoenix",
            "image": "/character/Phoenix_Artwork.webp"
        },
        {
            "name": "Raze",
            "image": "/character/Raze_Artwork.webp"
        },
        {
            "name": "Reyna",
            "image": "/character/Reyna_Artwork.webp"
        },
        {
            "name": "Sage",
            "image": "/character/Sage_Artwork.webp"
        },
        {
            "name": "Skye",
            "image": "/character/Skye_Artwork.webp"
        },
        {
            "name": "Sova",
            "image": "/character/Sova_Artwork.webp"
        },
        {
            "name": "Viper",
            "image": "/character/Viper_Artwork.webp"
        },
        {
            "name": "Yoru",
            "image": "/character/Yoru_Artwork.webp"
        },
    ];
    const randomIndex = Math.floor(Math.random() * data.length);
    res.status(200).json(data[randomIndex]);
}