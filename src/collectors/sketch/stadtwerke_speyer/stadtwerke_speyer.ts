
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeSpeyerCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_speyer",
        name: "Stadtwerke Speyer",
        description: "i18n.collectors.stadtwerke_speyer.description",
        version: "0",
        website: "https://onlineportal.stadtwerke-speyer.de/csit/action/csShowInvoices?formReset.x=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1378853.jpg",
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
        loginUrl: "https://onlineportal.stadtwerke-speyer.de/csit/action/csShowInvoices?formReset.x=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeSpeyerCollector.CONFIG);
    }
}
