import fs, { writeFile, access, mkdir, unlink  } from 'fs';
import path, { join } from 'path';

const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

}

const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().split(' ')[0].replace(/:/g, '-'); // Format: HH-MM-SS
}

async function createFileWithMessage(message) {
    const date = getCurrentDate();
    const time = getCurrentTime();

    const directory = path.join(process.cwd(), date);
    const file = path.join(directory, `${time}.txt`);

    try {
        await fs.promises.mkdir(directory, { recursive: true });
        await fs.promises,writeFile(file, message, 'utf-8');
        console.log('File created, path: ', file);
    } catch (error) {
        console.error('Error creating file: ', error);
    }
}

