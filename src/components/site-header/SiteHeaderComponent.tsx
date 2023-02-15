import { Avatar, Spin } from "antd";
import { useApi } from "../../api/useApi";
import { useAppStore } from "../../contexts/AppContext";
import { Wrapper } from "./SiteHeaderComponent.style";


type Props = {

}

const SiteHeaderComponent: React.FC<Props> = (props) => {
    const { getMyProfile } = useApi();
    const { myProfile, isLoadingMyProfile } = useAppStore();
    return <>
        <Wrapper>
            <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                {myProfile?.name.charAt(0) ?? <Spin></Spin>}
            </Avatar>
            <h4>Bitter</h4>
            <button onClick={() => getMyProfile()}>Get</button>
        </Wrapper>
    </>
}

export default SiteHeaderComponent;