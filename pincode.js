import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        const filePath = path.resolve('./database/pincodes.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const contacts = JSON.parse(jsonData);
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
