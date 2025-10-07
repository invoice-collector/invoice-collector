
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SunmiCollector extends SketchCollector {

    static CONFIG = {
        id: "sunmi",
        name: "Sunmi",
        description: "i18n.collectors.sunmi.description",
        version: "0",
        website: "https://partner.sunmi.com/sunmi-wallet/invoice-management",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2715280.jpg",
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
        entryUrl: "https://partner.sunmi.com/sunmi-wallet/invoice-management",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SunmiCollector.CONFIG);
    }
}
