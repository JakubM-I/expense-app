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
    StyledCategoryName,
    StyledButtonWrapper, 
} from "./styled";

const Categories = () => (
    <SectionPage>
        <SectionHeader title="Kategorie" />
        <StyledCategory>
        <StyledCategoryList>
            {[...categories]
                .filter(category => category.id !== 0)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(category => (
                    <StyledListItem key={category.id}>
                        <StyledCategoryName>{category.name}</StyledCategoryName>
                        <StyledButtonWrapper>
                            {/* <IconContext.Provider> */}
                                <button><FaRegEdit /></button>
                                <button><FaRegTrashCan /></button>
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