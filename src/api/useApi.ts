import { useAppStore } from '../contexts/AppContext';
import { NewsArticle } from '../types/NewsArticle';

export const useApi = () => {
    const {
        setMyProfile,
        setIsLoadingMyProfile,
        setIsLoadingBiits,
        setIsLoadingFriends,
        setIsLoadingNews,
        setBiits,
        setFriends,
        setNews,
        news,
        setSelectedNewsArticle,
        setIsLoadingEverything,
        setEverything,
    } = useAppStore();

    const endpoint = 'https://faggruppe-service-worker.azurewebsites.net/api/';

    const getMyProfile = async () => {
        setIsLoadingMyProfile(true);
        const response = await fetch(`${endpoint}GetMyProfile`);
        const profile = await response.json();

        setMyProfile({ ...profile });
        setIsLoadingMyProfile(false);
    };
    const getBiits = async () => {
        setIsLoadingBiits(true);
        const response = await fetch(`${endpoint}GetBiits`);
        const biits = await response.json();

        setBiits([...biits]);
        setIsLoadingBiits(false);
    };
    const getFriends = async () => {
        setIsLoadingFriends(true);
        const response = await fetch(`${endpoint}GetFriends`);
        const friends = await response.json();

        setFriends([...friends]);
        setIsLoadingFriends(false);
    };
    const getNews = async () => {
        setIsLoadingNews(true);
        const response = await fetch(`${endpoint}GetNews`);
        const news = await response.json();

        setNews([...news]);
        setIsLoadingNews(false);
    };
    const getNewsArticle = async (newsArticle: NewsArticle) => {
        newsArticle.isLoading = true;
        setNews([...news]);
        const response = await fetch(`${endpoint}GetNewsArticle?id=${newsArticle.id}`);
        const article = await response.json();
        newsArticle.isLoading = false;
        setNews([...news]);
        setSelectedNewsArticle({ ...article });
    };
    const getEverything = async () => {
        setIsLoadingEverything(true);
        const response = await fetch(`${endpoint}GetEverything`);
        const everything = await response.json();

        setEverything({ ...everything });
        setMyProfile({ ...everything.myProfile });
        setFriends([...everything.friends]);
        setNews([...everything.news]);
        setBiits([...everything.biits]);

        setIsLoadingEverything(false);
    };
    return {
        getMyProfile,
        getBiits,
        getFriends,
        getNews,
        getNewsArticle,
        getEverything,
    };
};
