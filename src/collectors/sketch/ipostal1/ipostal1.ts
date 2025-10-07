
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Ipostal1Collector extends SketchCollector {

    static CONFIG = {
        id: "ipostal1",
        name: "Ipostal1",
        description: "i18n.collectors.ipostal1.description",
        version: "0",
        website: "https://ipostal1.com/secure-store-login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1061800.jpg",
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
        entryUrl: "https://ipostal1.com/secure-store-login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Ipostal1Collector.CONFIG);
    }
}
