
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SegenSolarGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "segen_solar_gmbh",
        name: "Segen Solar GmbH",
        description: "i18n.collectors.segen_solar_gmbh.description",
        version: "0",
        website: "https://portal.segensolar.de/Reseller/Orders/RecentInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534210.jpg",
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
        loginUrl: "https://portal.segensolar.de/Reseller/Orders/RecentInvoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SegenSolarGmbhCollector.CONFIG);
    }
}
