
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwpSudwestPresseCollector extends SketchCollector {

    static CONFIG = {
        id: "swp_sudwest_presse",
        name: "SWP - Sudwest Presse",
        description: "i18n.collectors.swp_sudwest_presse.description",
        version: "0",
        website: "https://www.swp.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40034.jpg",
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
        entryUrl: "https://www.swp.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwpSudwestPresseCollector.CONFIG);
    }
}
