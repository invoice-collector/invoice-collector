
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RinganaNetCollector extends SketchCollector {

    static CONFIG = {
        id: "ringana_net",
        name: "Ringana.net",
        description: "i18n.collectors.ringana_net.description",
        version: "0",
        website: "https://www.ringana.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126632.jpg",
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
        entryUrl: "https://www.ringana.net/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RinganaNetCollector.CONFIG);
    }
}
