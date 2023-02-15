import React, { useContext, useState } from 'react';
import { Biit } from '../types/Biit';
import { ContextProps } from '../types/ContextProps';
import { Friend } from '../types/Friend';
import { News } from '../types/News';
import { Profile } from '../types/Profile';

type AppContextType = {
    myProfile?: Profile;
    biits: Biit[];
    friends: Friend[];
    news: News[];
    isLoadingMyProfile: boolean;
    isLoadingBiits: boolean;
    isLoadingFriends: boolean;
    isLoadingNews: boolean;
    setMyProfile: (profile: Profile) => void;
    setBiits: (biits: Biit[]) => void;
    setFriends: (friends: Friend[]) => void;
    setNews: (news: News[]) => void;
    setIsLoadingMyProfile: (isLoading: boolean) => void;
    setIsLoadingBiits: (isLoading: boolean) => void;
    setIsLoadingFriends: (isLoading: boolean) => void;
    setIsLoadingNews: (isLoading: boolean) => void;
};

export const AppContext = React.createContext<AppContextType>(undefined!);

export const AppProvider = ({ children }: ContextProps) => {
    const [myProfile, setMyProfile] = useState<Profile>();
    const [biits, setBiits] = useState<Biit[]>([]);
    const [friends, setFriends] = useState<Friend[]>([]);
    const [news, setNews] = useState<News[]>([]);
    const [isLoadingMyProfile, setIsLoadingMyProfile] = useState<boolean>(false);
    const [isLoadingBiits, setIsLoadingBiits] = useState<boolean>(false);
    const [isLoadingFriends, setIsLoadingFriends] = useState<boolean>(false);
    const [isLoadingNews, setIsLoadingNews] = useState<boolean>(false);

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
                setIsLoadingNews
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppStore = () => useContext(AppContext);
