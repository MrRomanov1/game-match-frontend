import { Platform } from "@angular/cdk/platform";
import { GameCategory } from "./game-category";
import { GameMode } from "./game-mode";

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
    numberOfVotes: number;
    releaseDate: Date;
    gameCategories: GameCategory[];
    gameModes: GameMode[];
    platforms: Platform[];
    gameMatch: number;
}
