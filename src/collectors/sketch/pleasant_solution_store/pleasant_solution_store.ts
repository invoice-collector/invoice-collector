
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PleasantSolutionStoreCollector extends SketchCollector {

    static CONFIG = {
        id: "pleasant_solution_store",
        name: "Pleasant Solution Store",
        description: "i18n.collectors.pleasant_solution_store.description",
        version: "0",
        website: "https://store.pleasantsolutions.com/Account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102640.jpg",
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
        entryUrl: "https://store.pleasantsolutions.com/Account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PleasantSolutionStoreCollector.CONFIG);
    }
}
