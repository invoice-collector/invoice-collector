
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaltFrCollector extends SketchCollector {

    static CONFIG = {
        id: "malt_fr",
        name: "Malt (fr)",
        description: "i18n.collectors.malt_fr.description",
        version: "0",
        website: "https://www.malt.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/812004.jpg",
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
        entryUrl: "https://www.malt.fr/invoicing/freelancer/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaltFrCollector.CONFIG);
    }
}
