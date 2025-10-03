
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InternetxAutodnsCollector extends SketchCollector {

    static CONFIG = {
        id: "internetx_autodns",
        name: "InternetX - AutoDNS",
        description: "i18n.collectors.internetx_autodns.description",
        version: "0",
        website: "https://www.internetx.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10069.jpg",
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
        entryUrl: "https://www.internetx.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InternetxAutodnsCollector.CONFIG);
    }
}
