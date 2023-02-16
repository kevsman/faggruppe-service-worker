import { Badge, Card } from 'antd';
import { useAppStore } from '../../contexts/AppContext';
import { ListWrapper } from '../../pages/Home.style';
import LoaderComponent from '../loader/LoaderComponent';
import { Wrapper } from './BiitListComponent.style';

type Props = {};

const BiitListComponent: React.FC<Props> = (props) => {
    const { biits, isLoadingBiits } = useAppStore();

    return (
        <>
            {isLoadingBiits && <LoaderComponent />}
            {!isLoadingBiits && (
                <ListWrapper>
                    <h4>Biits</h4>

                    {biits.map((biit) => (
                        <div key={`biit_${biit.id}`}>
                            <Badge count={biit.likes}>
                                <Card style={{ width: 400, marginBottom: 10 }}>{biit.text}</Card>
                            </Badge>
                        </div>
                    ))}
                </ListWrapper>
            )}
        </>
    );
};

export default BiitListComponent;
