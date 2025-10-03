
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZaDirektCollector extends SketchCollector {

    static CONFIG = {
        id: "za_direkt",
        name: "ZA:DIREKT",
        description: "i18n.collectors.za_direkt.description",
        version: "0",
        website: "https://zadirekt.zaag.de/inbox/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1747432.jpg",
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
        entryUrl: "https://zadirekt.zaag.de/inbox/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZaDirektCollector.CONFIG);
    }
}
