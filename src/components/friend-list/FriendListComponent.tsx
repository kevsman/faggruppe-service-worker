import { Avatar, Card } from 'antd';
import { useAppStore } from '../../contexts/AppContext';
import { ListWrapper } from '../../pages/Home.style';
import LoaderComponent from '../loader/LoaderComponent';

type Props = {};

const FriendListComponent: React.FC<Props> = (props) => {
    const { friends, isLoadingFriends } = useAppStore();
    return (
        <>
            {isLoadingFriends && <LoaderComponent />}
            {!isLoadingFriends && (
                <ListWrapper>
                    <h4>Friends</h4>

                    {friends.map((friend) => (
                        <div key={`friend_${friend.id}`}>
                            <Card style={{ width: 400, marginBottom: 10 }}>
                                <Avatar
                                    style={{ backgroundColor: 'orange', verticalAlign: 'middle', marginRight: '1rem', cursor: 'pointer' }}
                                    size="large"
                                >
                                    {friend.name.charAt(0)}
                                </Avatar>
                                {friend.name}
                            </Card>
                        </div>
                    ))}
                </ListWrapper>
            )}
        </>
    );
};

export default FriendListComponent;
