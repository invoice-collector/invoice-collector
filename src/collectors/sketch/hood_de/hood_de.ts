
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HoodDeCollector extends SketchCollector {

    static CONFIG = {
        id: "hood_de",
        name: "Hood.de",
        description: "i18n.collectors.hood_de.description",
        version: "0",
        website: "https://www.hood.de/mein-hood.htm?sec=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20627.jpg",
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
        entryUrl: "https://www.hood.de/mein-hood.htm?sec=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HoodDeCollector.CONFIG);
    }
}
