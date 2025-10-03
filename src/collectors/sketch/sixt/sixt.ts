
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SixtCollector extends SketchCollector {

    static CONFIG = {
        id: "sixt",
        name: "SIXT",
        description: "i18n.collectors.sixt.description",
        version: "0",
        website: "https://www.sixt.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1054.jpg",
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
        entryUrl: "https://www.sixt.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SixtCollector.CONFIG);
    }
}
