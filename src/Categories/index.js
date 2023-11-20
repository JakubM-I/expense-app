import { IconContext } from "react-icons";
import { FaRegTrashCan } from "react-icons/fa6"
import { FaRegEdit } from "react-icons/fa"
import SectionPage from "../SectionPage";
import SectionHeader from "../SectionHeader";
import { categories } from "../utilities/categories";
import { 
    StyledCategory, 
    StyledCategoryList, 
    StyledListItem,
    StyledFirstListItem,
    StyledAddButton,
    StyledCategoryName,
    StyledButtonWrapper,
    StyledEditButton,
    StyledDeleteButton, 
} from "./styled";

const Categories = () => (
    <SectionPage>
        <SectionHeader title="Kategorie" />
        <StyledCategory>
        <StyledCategoryList>
            <StyledFirstListItem>
                <StyledAddButton>Dodaj kategorię</StyledAddButton>
            </StyledFirstListItem>
            {[...categories]
                .filter(category => category.id !== 0)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(category => (
                    <StyledListItem key={category.id}>
                        <StyledCategoryName>{category.name}</StyledCategoryName>
                        <StyledButtonWrapper>
                            {/* <IconContext.Provider> */}
                                <StyledEditButton><FaRegEdit /></StyledEditButton>
                                <StyledDeleteButton><FaRegTrashCan /></StyledDeleteButton>
                            {/* </IconContext.Provider> */}
                        </StyledButtonWrapper>
                    </StyledListItem>
                ))
            }
        </StyledCategoryList>
        </StyledCategory>

    </SectionPage>
);

export default Categories;