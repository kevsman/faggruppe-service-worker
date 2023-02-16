import { Avatar, Layout, Spin } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import { useAppStore } from '../../contexts/AppContext';
import { Logo, ProfileDetailsWrapper, Wrapper } from './SiteHeaderComponent.style';

type Props = {};

const SiteHeaderComponent: React.FC<Props> = (props) => {
    const { myProfile, isLoadingMyProfile } = useAppStore();
    const [isProfileDetailsVisible, setIsProfileDetailsVisible] = useState(false);

    const onClearCacheClick = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
                registration.active.postMessage({
                    type: 'clear_cache',
                });
            });
        }
    };

    return (
        <>
            <Wrapper>
                <Layout>
                    <Header className="header">
                        <Avatar shape={'square'} style={{ backgroundColor: 'rgb(76 66 48)', verticalAlign: 'middle', float: 'right' }} size={'large'}>
                            <Logo>BITTER</Logo>
                        </Avatar>
                        <Avatar
                            style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle', float: 'right', cursor: 'pointer' }}
                            size="large"
                            onClick={() => setIsProfileDetailsVisible(!isProfileDetailsVisible)}
                        >
                            {isLoadingMyProfile ? <Spin></Spin> : myProfile?.name.charAt(0) ?? ''}
                        </Avatar>
                        {isProfileDetailsVisible && (
                            <ProfileDetailsWrapper>
                                <button onClick={onClearCacheClick}>Clear cache</button>
                            </ProfileDetailsWrapper>
                        )}
                    </Header>
                </Layout>
            </Wrapper>
        </>
    );
};

export default SiteHeaderComponent;
