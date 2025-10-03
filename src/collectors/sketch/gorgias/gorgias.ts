
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GorgiasCollector extends SketchCollector {

    static CONFIG = {
        id: "gorgias",
        name: "gorgias",
        description: "i18n.collectors.gorgias.description",
        version: "0",
        website: "https://welcome.gorgias.io/select-domain",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51056.jpg",
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
        entryUrl: "https://welcome.gorgias.io/select-domain",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GorgiasCollector.CONFIG);
    }
}
