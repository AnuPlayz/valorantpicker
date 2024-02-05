import { NextApiRequest, NextApiResponse } from 'next';

// Function to fetch random data from an API
async function fetchRandomData(apiUrl: string): Promise<any> {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return {}; // Return an empty object if there is an error
    }
}

// Next.js API route handler
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Fetch random character data
        const characterData = await fetchRandomData('https://valorantpicker.vercel.app/api/character');
        // Fetch random map data
        const mapData = await fetchRandomData('https://valorantpicker.vercel.app/api/map');
        // Fetch random mode data
        const modeData = await fetchRandomData('https://valorantpicker.vercel.app/api/mode');

        // Return the random data as a JSON response
        res.status(200).json({ character: characterData, map: mapData, mode: modeData });
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
}