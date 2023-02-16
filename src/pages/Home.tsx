import { useEffect } from 'react';
import { useApi } from '../api/useApi';
import BiitListComponent from '../components/biit-list/BiitListComponent';
import FriendListComponent from '../components/friend-list/FriendListComponent';
import LoaderComponent from '../components/loader/LoaderComponent';
import NewsFeedComponent from '../components/news-feed/NewsFeedComponent';
import { useAppStore } from '../contexts/AppContext';
import { Wrapper } from './Home.style';

type Props = {};

const HomePage: React.FC<Props> = (props) => {
    const { getMyProfile, getBiits, getNews, getFriends, getEverything } = useApi();
    const { isLoadingEverything } = useAppStore();

    useEffect(() => {
        getMyProfile();
        getBiits();
        getNews();
        getFriends();
        // getEverything();
    }, []);
    return (
        <>
            {isLoadingEverything && <LoaderComponent></LoaderComponent>}
            {!isLoadingEverything && (
                <Wrapper>
                    <FriendListComponent />
                    <BiitListComponent />
                    <NewsFeedComponent />
                </Wrapper>
            )}
        </>
    );
};

export default HomePage;
