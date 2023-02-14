import { useGetProfile } from "../../api/useGetProfile";
import { Wrapper } from "./SiteHeaderComponent.style";

type Props = {

}

const SiteHeaderComponent: React.FC<Props> = (props) => {
    const { getMyProfile } = useGetProfile();
    return <>
        <Wrapper>
            <h4>Bitter</h4>
            <button onClick={() => getMyProfile()}>Get</button>
        </Wrapper>
    </>
}

export default SiteHeaderComponent;