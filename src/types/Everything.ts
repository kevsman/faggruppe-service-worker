import { Biit } from './Biit';
import { NewsArticle } from './NewsArticle';
import { Profile } from './Profile';

export type Everything = {
    myProfile: Profile;
    friends: Profile[];
    news: NewsArticle[];
    biits: Biit[];
};
