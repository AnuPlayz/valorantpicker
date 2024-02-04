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
            "name": "Unrated",
            "image": "https://i.pinimg.com/originals/62/5b/12/625b12f7f441075751f131baa9f6628f.gif"
        },
        {
            "name": "Swiftplay",
            "image": "https://i.pinimg.com/564x/27/77/6c/27776cc292cedb3e2435e3a6b7672cb0.jpg"
        },
        {
            "name": "Competitive",
            "image": "https://i.pinimg.com/564x/d2/db/92/d2db92bc5d4c284669a95525e18bb523.jpg"
        },
        {
            "name": "Team Deathmatch",
            "image": "https://i.pinimg.com/564x/e2/7f/96/e27f9673fee7436b7e8d11d87d699a0d.jpg"
        },
        {
            "name": "Spike Rush",
            "image": "https://i.pinimg.com/564x/b8/26/1b/b8261beb0777a232ad4691af13b4eb86.jpg"
        },
        {
            "name": "Deathmatch",
            "image": "https://i.pinimg.com/564x/88/72/7c/88727c36c8c257f4e4a3fd6fbc897244.jpg"
        },
        {
            "name": "Escalation",
            "image": "https://i.pinimg.com/564x/dc/3a/c4/dc3ac49b69741098a1964f3770906e01.jpg"
        },
        {
            "name": "Practice Range",
            "image": "https://i.pinimg.com/564x/e5/81/4a/e5814a09d3c36a537558bb800bc30ed0.jpg"
        },
    ];
    let randomIndex = Math.floor(Math.random() * data.length);
    const { name, image } = data[randomIndex];
    data.splice(randomIndex, 1);
    res.status(200).json({ name, image });
}