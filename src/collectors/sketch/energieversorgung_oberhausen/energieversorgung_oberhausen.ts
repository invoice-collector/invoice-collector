
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnergieversorgungOberhausenCollector extends SketchCollector {

    static CONFIG = {
        id: "energieversorgung_oberhausen",
        name: "Energieversorgung Oberhausen",
        description: "i18n.collectors.energieversorgung_oberhausen.description",
        version: "0",
        website: "https://kundenportal.evo-energie.de/evo/index.html#/invoiceOverview/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1471231.jpg",
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
        loginUrl: "https://kundenportal.evo-energie.de/evo/index.html#/invoiceOverview/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnergieversorgungOberhausenCollector.CONFIG);
    }
}
