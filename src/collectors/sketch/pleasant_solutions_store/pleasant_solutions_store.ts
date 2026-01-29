
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PleasantSolutionsStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "pleasant_solutions_store",
        name: "Pleasant Solutions Store",
        description: "i18n.collectors.pleasant_solutions_store.description",
        version: "0",
        website: "https://store.pleasantsolutions.com/Account/SignIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64605.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://store.pleasantsolutions.com/Account/SignIn",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PleasantSolutionsStoreCollector.CONFIG);
    }
}
