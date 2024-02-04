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
            "name": "Sage",
            "image": "https://i.pinimg.com/736x/12/00/ce/1200ce8beae6d301282b12cde5e1d93d.jpg"
        },
        {
            "name": "Phoenix",
            "image": "https://i.pinimg.com/564x/bb/67/ea/bb67ea4e9b42c3dde07024294ffdb09d.jpg"
        },
        {
            "name": "Jett",
            "image": "https://i.pinimg.com/564x/17/4f/25/174f251a7a222943302161a770935edc.jpg"
        },
        {
            "name": "Cypher",
            "image": "https://i.pinimg.com/564x/67/ae/0d/67ae0d6d50aa28de25dbbb96990d0ce0.jpg"
        },
        {
            "name": "Sova",
            "image": "https://i.pinimg.com/736x/87/b7/fc/87b7fc498e6bd125157bac23e0b1343f.jpg"
        },
        {
            "name": "Brimstone",
            "image": "brimstone_image_url"
        },
        {
            "name": "Omen",
            "image": "omen_image_url"
        },
        {
            "name": "Viper",
            "image": "viper_image_url"
        },
        {
            "name": "Breach",
            "image": "breach_image_url"
        },
        {
            "name": "Raze",
            "image": "raze_image_url"
        },
        {
            "name": "Reyna",
            "image": "reyna_image_url"
        },
        {
            "name": "Killjoy",
            "image": "killjoy_image_url"
        },
        {
            "name": "Skye",
            "image": "skye_image_url"
        }
    ];
    const randomIndex = Math.floor(Math.random() * data.length);
    res.status(200).json(data[randomIndex]);
}