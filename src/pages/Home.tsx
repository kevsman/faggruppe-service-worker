import BiitListComponent from "../components/biit-list/BiitListComponent";
import { Wrapper } from "./Home.style";

type Props = {

}

const HomePage: React.FC<Props> = (props) => {
    return (
        <>
            <Wrapper>
                <BiitListComponent />
            </Wrapper>
        </>
    );
}

export default HomePage;