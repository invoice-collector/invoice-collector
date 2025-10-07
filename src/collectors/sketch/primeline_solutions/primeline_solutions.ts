
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrimelineSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "primeline_solutions",
        name: "Primeline Solutions",
        description: "i18n.collectors.primeline_solutions.description",
        version: "0",
        website: "https://www.primeline-solutions.com/de/customer/invoice/all/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192204.jpg",
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
        entryUrl: "https://www.primeline-solutions.com/de/customer/invoice/all/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrimelineSolutionsCollector.CONFIG);
    }
}
