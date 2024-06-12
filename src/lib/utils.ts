import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Papa from "papaparse";
import * as XLSX from "xlsx";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


type ParsedData = any[];

export const readFile = (file: File): Promise<ParsedData> => {
    return new Promise((resolve, reject) => {
        const fileExtension = file.name.split('.').pop()?.toLowerCase();

        if (fileExtension === 'csv') {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    Papa.parse(event.target.result.toString(), {
                        header: true,
                        complete: (result:any) => {
                            resolve(result.data);
                        },
                        error: (error:any) => {
                            reject(error.message);
                        }
                    });
                } else {
                    reject('No data found');
                }
            };
            reader.onerror = () => reject('Error reading file');
            reader.readAsText(file);
        } else if (fileExtension === 'xlsx') {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    const data = new Uint8Array(event.target.result as ArrayBuffer);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const json = XLSX.utils.sheet_to_json(worksheet);
                    resolve(json);
                } else {
                    reject('No data found');
                }
            };
            reader.onerror = () => reject('Error reading file');
            reader.readAsArrayBuffer(file);
        } else {
            reject('Unsupported file type');
        }
    });
};