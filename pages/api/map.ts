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
            "name": "Ascent",
            "image": "/maps/Loading_Screen_Ascent.webp"
        },
        {
            "name": "Bind",
            "image": "/maps/Loading_Screen_Bind.webp"
        },
        {
            "name": "Breeze",
            "image": "/maps/Loading_Screen_Breeze.webp"
        },
        {
            "name": "Fracture",
            "image": "/maps/Loading_Screen_Fracture.webp"
        },
        {
            "name": "Haven",
            "image": "/maps/Loading_Screen_Haven.webp"
        },
        {
            "name": "Icebox",
            "image": "/maps/Loading_Screen_Icebox.webp"
        },
        {
            "name": "Lotus",
            "image": "/maps/Loading_Screen_Lotus.webp"
        },
        {
            "name": "Pearl",
            "image": "/maps/Loading_Screen_Pearl.webp"
        },
        {
            "name": "Split",
            "image": "/maps/Loading_Screen_Split.webp"
        },
        {
            "name": "Sunset",
            "image": "/maps/Loading_Screen_Sunset.webp"
        },
    ];
    let randomIndex = Math.floor(Math.random() * data.length);
    const { name, image } = data[randomIndex];
    data.splice(randomIndex, 1);
    res.status(200).json({ name, image });
}