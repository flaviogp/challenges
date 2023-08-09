
export interface IDestination {
    name: string;
    image: string;
    description: string;
    distance: string;
    travel: string;
}
export interface ICrew {
    name: string;
    image: string;
    role: string;
    bio: string;
}
export interface ITechnology {
    name: string;
    description: string;
    image: string;
}

export interface IData {
    destinations: IDestination[];
    crews: ICrew[];
    technologies: ITechnology[];
}