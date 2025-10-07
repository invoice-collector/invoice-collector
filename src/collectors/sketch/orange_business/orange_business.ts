
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrangeBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_business",
        name: "ORANGE BUSINESS",
        description: "i18n.collectors.orange_business.description",
        version: "0",
        website: "https://espaceclient.orange-business.com/group/ece2/facture-electronique",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211140.jpg",
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
        entryUrl: "https://espaceclient.orange-business.com/group/ece2/facture-electronique",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrangeBusinessCollector.CONFIG);
    }
}
