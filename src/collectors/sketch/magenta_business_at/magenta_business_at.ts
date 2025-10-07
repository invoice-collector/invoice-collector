
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MagentaBusinessAtCollector extends SketchCollector {

    static CONFIG = {
        id: "magenta_business_at",
        name: "Magenta Business AT",
        description: "i18n.collectors.magenta_business_at.description",
        version: "0",
        website: "https://csc.magentabusiness.at/client/login?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2477067.jpg",
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
        entryUrl: "https://csc.magentabusiness.at/client/login?",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MagentaBusinessAtCollector.CONFIG);
    }
}
