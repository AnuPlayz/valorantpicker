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
            "image": require("/public/maps/Loading_Screen_Ascent.webp")
        },
        {
            "name": "Bind",
            "image": require("/public/maps/Loading_Screen_Bind.webp")
        },
        {
            "name": "Breeze",
            "image": require("/public/maps/Loading_Screen_Breeze.webp")
        },
        {
            "name": "Fracture",
            "image": require("/public/maps/Loading_Screen_Fracture.webp")
        },
        {
            "name": "Haven",
            "image": require("/public/maps/Loading_Screen_Haven.webp")
        },
        {
            "name": "Icebox",
            "image": require("/public/maps/Loading_Screen_Icebox.webp")
        },
        {
            "name": "Lotus",
            "image": require("/public/maps/Loading_Screen_Lotus.webp")
        },
        {
            "name": "Pearl",
            "image": require("/public/maps/Loading_Screen_Pearl.webp")
        },
        {
            "name": "Split",
            "image": require("/public/maps/Loading_Screen_Split.webp")
        },
        {
            "name": "Sunset",
            "image": require("/public/maps/Loading_Screen_Sunset.webp")
        },
    ];
    let randomIndex = Math.floor(Math.random() * data.length);
    const { name, image } = data[randomIndex];
    data.splice(randomIndex, 1);
    res.status(200).json({ name, image });
}