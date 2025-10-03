
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasyfeedbackCollector extends SketchCollector {

    static CONFIG = {
        id: "easyfeedback",
        name: "easyfeedback",
        description: "i18n.collectors.easyfeedback.description",
        version: "0",
        website: "https://app.easy-feedback.com/login?l=de&_gl=1*9lnrsk*_ga*Mzk4MjIxMDQ2LjE2MTk3ODEwNTc.*_ga_760DZB7YKX*MTYxOTc4MTA1Ny4xLjAuMTYxOTc4MTA1Ny42MA..&_ga=2.160849981.1208430453.1619781057-398221046.1619781057",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/790701.jpg",
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
        entryUrl: "https://app.easy-feedback.com/login?l=de&_gl=1*9lnrsk*_ga*Mzk4MjIxMDQ2LjE2MTk3ODEwNTc.*_ga_760DZB7YKX*MTYxOTc4MTA1Ny4xLjAuMTYxOTc4MTA1Ny42MA..&_ga=2.160849981.1208430453.1619781057-398221046.1619781057",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyfeedbackCollector.CONFIG);
    }
}
