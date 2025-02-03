import { AnimeRating } from '../types/AnimeRating';
import { IAnimeCard } from './IAnimeCard';
import { IStudio } from './IStudio';

export interface IAnime extends IAnimeCard {
    rating: AnimeRating;
    duration: number;
    next_episode_at: number | null;
    fansubbers: string[];
    fandubbers: string[];
    english: string[];
    synonyms: string[];
    description: string;
    description_html: string;
    studios: IStudio;
}
