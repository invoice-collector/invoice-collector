
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VereinigteStadtwerkeLadecloudCollector extends SketchCollector {

    static CONFIG = {
        id: "vereinigte_stadtwerke_ladecloud",
        name: "Vereinigte Stadtwerke Ladecloud",
        description: "i18n.collectors.vereinigte_stadtwerke_ladecloud.description",
        version: "0",
        website: "https://vereinigte-stadtwerke.ladecloud.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375631.jpg",
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
        loginUrl: "https://vereinigte-stadtwerke.ladecloud.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VereinigteStadtwerkeLadecloudCollector.CONFIG);
    }
}
