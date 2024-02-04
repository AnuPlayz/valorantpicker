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
            "image": "/character/Brimstone_artwork.webp"
        },
        {
            "name": "Chamber",
            "image": "/character/Chamber_artwork.webp"
        },
        {
            "name": "Cypher",
            "image": "/character/Cypher_artwork.webp"
        },
        {
            "name": "Deadlock",
            "image": "/character/Deadlock_artwork.webp"
        },
        {
            "name": "Fade",
            "image": "/character/Fade_artwork.webp"
        },
        {
            "name": "Gekko",
            "image": "/character/Gekko_artwork.webp"
        },
        {
            "name": "Harbor",
            "image": "/character/Harbor_artwork.webp"
        },
        {
            "name": "Iso",
            "image": "/character/Iso_artwork.webp"
        },
        {
            "name": "Jett",
            "image": "/character/Jett_artwork.webp"
        },
        {
            "name": "Kayo",
            "image": "/character/KAYO_artwork.webp"
        },
        {
            "name": "Killjoy",
            "image": "/character/Killjoy_artwork.webp"
        },
        {
            "name": "Neon",
            "image": "/character/Neon_artwork.webp"
        },
        {
            "name": "Omen",
            "image": "/character/Omen_artwork.webp"
        },
        {
            "name": "Phoenix",
            "image": "/character/Phoenix_artwork.webp"
        },
        {
            "name": "Raze",
            "image": "/character/Raze_artwork.webp"
        },
        {
            "name": "Reyna",
            "image": "/character/Reyna_artwork.webp"
        },
        {
            "name": "Sage",
            "image": "/character/Sage_artwork.webp"
        },
        {
            "name": "Skye",
            "image": "/character/Skye_artwork.webp"
        },
        {
            "name": "Sova",
            "image": "/character/Sova_artwork.webp"
        },
        {
            "name": "Viper",
            "image": "/character/Viper_artwork.webp"
        },
        {
            "name": "Yoru",
            "image": "/character/Yoru_artwork.webp"
        },
    ];
    const randomIndex = Math.floor(Math.random() * data.length);
    res.status(200).json(data[randomIndex]);
}