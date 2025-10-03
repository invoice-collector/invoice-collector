
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PearlFrCollector extends SketchCollector {

    static CONFIG = {
        id: "pearl_fr",
        name: "Pearl.fr",
        description: "i18n.collectors.pearl_fr.description",
        version: "0",
        website: "https://www.pearl.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122468.jpg",
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
        entryUrl: "https://www.pearl.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PearlFrCollector.CONFIG);
    }
}
