import { GameCategory } from "./game-category";
import { GameMode } from "./game-mode";
import { Platform } from "./platform";
import { Theme } from "./theme";

export class Game {
    id: BigInteger;
    title: string;
    alias: string;
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
    themes: Theme[];
    gameMatch: number;
    platformIcons: string[];
}
