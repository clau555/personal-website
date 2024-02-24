export interface Language {
    name: string;
    color: string;
}

export interface Project {
    name: string;
    description: string;
    repo: string;
    demo: string;
    language: Language;
}
