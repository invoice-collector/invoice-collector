
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EmiratesCollector extends SketchCollector {

    static CONFIG = {
        id: "emirates",
        name: "Emirates",
        description: "i18n.collectors.emirates.description",
        version: "0",
        website: "https://www.emirates.com/de/german/manage-booking",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4216782.jpg",
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
        entryUrl: "https://www.emirates.com/de/german/manage-booking",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EmiratesCollector.CONFIG);
    }
}
