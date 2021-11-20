import { GameCategory } from "./game-category";

export class Game {
    id: BigInteger;
    title: string;
    description: string;
    descriptionFirstHeader: string;
    descriptionFirst: string;
    imageUrl: string;
    trailerUrl: string;
    systemMinimumRequirements: string;
    systemRecommendedRequirements: string;
    rating: number;
    releaseDate: Date;
    gameCategories: GameCategory[];
    gameMatch: number;
}
