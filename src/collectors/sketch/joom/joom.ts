
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JoomCollector extends SketchCollector {

    static CONFIG = {
        id: "joom",
        name: "Joom",
        description: "i18n.collectors.joom.description",
        version: "0",
        website: "https://www.joom.com/de/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445707.jpg",
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
        entryUrl: "https://www.joom.com/de/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JoomCollector.CONFIG);
    }
}
