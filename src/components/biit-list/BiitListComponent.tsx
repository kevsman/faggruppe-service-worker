import { useAppStore } from "../../contexts/AppContext";
import { Wrapper } from "./BiitListComponent.style";

type Props = {

}

const BiitListComponent: React.FC<Props> = (props) => {
    const { biits, isLoadingBiits } = useAppStore();

    return <>
        <Wrapper>
            {biits.map(biit => 
                <div key={`biit_${biit.id}`}>
                    
                </div>
                )}
        </Wrapper>
    </>
}

export default BiitListComponent;