
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KasperskyCollector extends SketchCollector {

    static CONFIG = {
        id: "kaspersky",
        name: "Kaspersky",
        description: "i18n.collectors.kaspersky.description",
        version: "0",
        website: "https://my.kaspersky.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24460.jpg",
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
        entryUrl: "https://my.kaspersky.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KasperskyCollector.CONFIG);
    }
}
