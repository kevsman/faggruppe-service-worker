import React, { useContext, useState } from 'react';
import { Biit } from '../types/Biit';
import { ContextProps } from '../types/ContextProps';
import { Everything } from '../types/Everything';
import { NewsArticle } from '../types/NewsArticle';
import { Profile } from '../types/Profile';

type AppContextType = {
    myProfile?: Profile;
    selectedNewsArticle?: NewsArticle;
    everything?: Everything;
    biits: Biit[];
    friends: Profile[];
    news: NewsArticle[];
    isLoadingEverything: boolean;
    isLoadingMyProfile: boolean;
    isLoadingBiits: boolean;
    isLoadingFriends: boolean;
    isLoadingNews: boolean;
    isLoadingNewsArticle: number[];
    setMyProfile: (profile: Profile) => void;
    setEverything: (everything: Everything) => void;
    setSelectedNewsArticle: (newsArticle: NewsArticle) => void;
    setBiits: (biits: Biit[]) => void;
    setFriends: (friends: Profile[]) => void;
    setNews: (news: NewsArticle[]) => void;
    setIsLoadingEverything: (isLoading: boolean) => void;
    setIsLoadingMyProfile: (isLoading: boolean) => void;
    setIsLoadingBiits: (isLoading: boolean) => void;
    setIsLoadingFriends: (isLoading: boolean) => void;
    setIsLoadingNews: (isLoading: boolean) => void;
    setIsLoadingNewsArticle: (articleId: number[]) => void;
};

export const AppContext = React.createContext<AppContextType>(undefined!);

export const AppProvider = ({ children }: ContextProps) => {
    const [myProfile, setMyProfile] = useState<Profile>();
    const [everything, setEverything] = useState<Everything>();
    const [selectedNewsArticle, setSelectedNewsArticle] = useState<NewsArticle>();
    const [biits, setBiits] = useState<Biit[]>([]);
    const [friends, setFriends] = useState<Profile[]>([]);
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [isLoadingEverything, setIsLoadingEverything] = useState<boolean>(false);
    const [isLoadingMyProfile, setIsLoadingMyProfile] = useState<boolean>(false);
    const [isLoadingBiits, setIsLoadingBiits] = useState<boolean>(false);
    const [isLoadingFriends, setIsLoadingFriends] = useState<boolean>(false);
    const [isLoadingNews, setIsLoadingNews] = useState<boolean>(false);
    const [isLoadingNewsArticle, setIsLoadingNewsArticle] = useState<number[]>([]);

    return (
        <AppContext.Provider
            value={{
                myProfile,
                setMyProfile,
                isLoadingMyProfile,
                setIsLoadingMyProfile,
                biits,
                setBiits,
                friends,
                setFriends,
                news,
                setNews,
                isLoadingBiits,
                setIsLoadingBiits,
                isLoadingFriends,
                setIsLoadingFriends,
                isLoadingNews,
                setIsLoadingNews,
                selectedNewsArticle,
                setSelectedNewsArticle,
                isLoadingNewsArticle,
                setIsLoadingNewsArticle,
                isLoadingEverything,
                setIsLoadingEverything,
                everything,
                setEverything,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppStore = () => useContext(AppContext);
