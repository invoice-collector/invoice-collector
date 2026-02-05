
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterhypPrivateNetworkCollector extends SketchCollector {

    static CONFIG = {
        id: "interhyp_private_network",
        name: "Interhyp Private Network",
        description: "i18n.collectors.interhyp_private_network.description",
        version: "0",
        website: "https://www.interhyp-partnerprogramm.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180707.jpg",
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
        loginUrl: "https://www.interhyp-partnerprogramm.de/auszahlungen.cgi",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InterhypPrivateNetworkCollector.CONFIG);
    }
}
