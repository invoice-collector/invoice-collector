
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LOrealParisCollector extends SketchCollector {

    static CONFIG = {
        id: "l_oreal_paris",
        name: "L\'Oreal Paris",
        description: "i18n.collectors.l_oreal_paris.description",
        version: "0",
        website: "https://www.loreal.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120399.jpg",
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
        entryUrl: "https://www.loreal.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LOrealParisCollector.CONFIG);
    }
}
