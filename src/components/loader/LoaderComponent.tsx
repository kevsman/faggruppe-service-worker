import { Spin } from 'antd';

type Props = {};

const LoaderComponent: React.FC<Props> = (props) => {
    return (
        <>
            <Spin></Spin>
        </>
    );
};

export default LoaderComponent;
