
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallLadeappCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_ladeapp",
        name: "Vattenfall LadeApp",
        description: "i18n.collectors.vattenfall_ladeapp.description",
        version: "0",
        website: "https://vattenfall.chargecloud.de/#/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1210750.jpg",
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
        entryUrl: "https://vattenfall.chargecloud.de/#/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VattenfallLadeappCollector.CONFIG);
    }
}
