
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PepperfryCollector extends SketchCollector {

    static CONFIG = {
        id: "pepperfry",
        name: "pepperfry",
        description: "i18n.collectors.pepperfry.description",
        version: "0",
        website: "https://www.pepperfry.com/customer/logout/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7094.jpg",
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
        entryUrl: "https://www.pepperfry.com/customer/logout/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PepperfryCollector.CONFIG);
    }
}
