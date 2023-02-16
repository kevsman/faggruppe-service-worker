import { Card, Spin } from 'antd';
import { useApi } from '../../api/useApi';
import { useAppStore } from '../../contexts/AppContext';
import { ListWrapper } from '../../pages/Home.style';
import LoaderComponent from '../loader/LoaderComponent';
import { Wrapper } from './NewsFeedComponent.style';

type Props = {};

const NewsFeedComponent: React.FC<Props> = (props) => {
    const { getNewsArticle } = useApi();
    const { news, isLoadingNews } = useAppStore();

    return (
        <>
            {isLoadingNews && <LoaderComponent />}
            {!isLoadingNews && (
                <ListWrapper>
                    <h4>News</h4>

                    {news.map((article) => (
                        <div key={`article_${article.id}`}>
                            <Card style={{ width: 800, marginBottom: 10 }} title={article.summary}>
                                {article.isLoading && <Spin></Spin>}
                                {!article.isLoading && (
                                    <>
                                        {article.text} <br />
                                        <button onClick={() => getNewsArticle(article)}>Read more</button>
                                    </>
                                )}
                            </Card>
                        </div>
                    ))}
                </ListWrapper>
            )}
        </>
    );
};

export default NewsFeedComponent;
