import { OrangeHelperSelectors } from "../helper/selectors";

export const SoshSelectors = {

    ...OrangeHelperSelectors,

    // FOR EACH PAGE

    CONTAINER_OFFERS: {
        selector: "ecm-selector-contract > div > div > div > div > ul > li > ecm-mat-item-list",
        info: "container offers"
    },
}
