
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlugAndPayCollector extends SketchCollector {

    static CONFIG = {
        id: "plug_and_pay",
        name: "Plug&Pay",
        description: "i18n.collectors.plug_and_pay.description",
        version: "0",
        website: "https://plugandpay.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778144.jpg",
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
        entryUrl: "https://plugandpay.nl/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlugAndPayCollector.CONFIG);
    }
}
