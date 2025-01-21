import { AnimeKind } from '../types/AnimeKind';
import { AnimeStatus } from '../types/AnimeStatus';
import { IImage } from './IImage';

export interface IAnimeCart {
    id: number;
    name: string;
    russian: string;
    image: IImage;
    kind: AnimeKind;
    score: string;
    status: AnimeStatus;
    episodes: number;
    episodes_aired: number;
    aired_on: string;
    released_on: string;
}
