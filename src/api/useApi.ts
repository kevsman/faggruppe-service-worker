import { useAppStore } from "../contexts/AppContext"

export const useApi = () => {
    const { setMyProfile, setIsLoadingMyProfile, setIsLoadingBiits, setIsLoadingFriends,
        setIsLoadingNews, setBiits, setFriends, setNews } = useAppStore();

    const getMyProfile = async () => {
        setIsLoadingMyProfile(true);
        const response = await fetch('http://localhost:7214/api/GetMyProfile')
        const profile = await response.json();

        setMyProfile({ ...profile });
        setIsLoadingMyProfile(false);
    }
    const getBiits = async () => {
        setIsLoadingBiits(true);
        const response = await fetch('http://localhost:7214/api/GetBiits')
        const biits = await response.json();

        setBiits([...biits]);
        setIsLoadingBiits(false);
    }
    const getFriends = async () => {
        setIsLoadingFriends(true);
        const response = await fetch('http://localhost:7214/api/GetFriends')
        const friends = await response.json();

        setFriends([...friends]);
        setIsLoadingFriends(false);
    }
    const getNews = async () => {
        setIsLoadingNews(true);
        const response = await fetch('http://localhost:7214/api/GetNews')
        const news = await response.json();

        setNews([...news]);
        setIsLoadingNews(false);
    }
    return {
        getMyProfile,
        getBiits,
        getFriends,
        getNews
    }
}