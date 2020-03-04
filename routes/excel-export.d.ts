declare module 'excel-export' {
    export interface Config {
        cols: { caption: string, type: string }[];
        rows: any[];
    }
    export function execute(config: Config): void;
}