
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AgipiCollector extends SketchCollector {

    static CONFIG = {
        id: "agipi",
        name: "Agipi",
        description: "i18n.collectors.agipi.description",
        version: "0",
        website: "https://www.assurancevie-agipi.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105198.jpg",
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
        entryUrl: "https://www.assurancevie-agipi.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AgipiCollector.CONFIG);
    }
}
