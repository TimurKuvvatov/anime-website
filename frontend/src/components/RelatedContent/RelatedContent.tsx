import { FC } from 'react';
import { IAnimeRelations } from '../../models/IAnimeRelation';
import styles from './RelatedContent.module.scss';
import RelatedCard from '../RelatedCard/RelatedCard';

interface RelatedContentProps {
    animes: IAnimeRelations[];
}

const RelatedContent: FC<RelatedContentProps> = ({ animes }) => {
    if (animes.length === 0) {
        return null;
    }
    return (
        <section className={styles.related__wrapper}>
            <h3>Связанное</h3>
            <div className={styles.animes}>
                {animes.map((anime) => (anime.anime ? <RelatedCard anime={anime} /> : null))}
            </div>
        </section>
    );
};

export default RelatedContent;
