
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WapplerCollector extends SketchCollector {

    static CONFIG = {
        id: "wappler",
        name: "Wappler",
        description: "i18n.collectors.wappler.description",
        version: "0",
        website: "https://account5.wappler.io/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920142.jpg",
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
        entryUrl: "https://account5.wappler.io/payment",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WapplerCollector.CONFIG);
    }
}
