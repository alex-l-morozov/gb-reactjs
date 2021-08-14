import {AUTHORS} from "../../constants/authors";

export const selectName = (state) => state.profile.name || AUTHORS.human;