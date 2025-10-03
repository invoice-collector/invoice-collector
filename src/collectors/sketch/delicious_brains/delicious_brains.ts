
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeliciousBrainsCollector extends SketchCollector {

    static CONFIG = {
        id: "delicious_brains",
        name: "Delicious brains",
        description: "i18n.collectors.delicious_brains.description",
        version: "0",
        website: "https://deliciousbrains.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158366.jpg",
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
        entryUrl: "https://deliciousbrains.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeliciousBrainsCollector.CONFIG);
    }
}
