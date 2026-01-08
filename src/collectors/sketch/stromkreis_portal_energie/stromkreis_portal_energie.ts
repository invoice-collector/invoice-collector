
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StromkreisPortalEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "stromkreis_portal_energie",
        name: "Stromkreis portal-energie",
        description: "i18n.collectors.stromkreis_portal_energie.description",
        version: "0",
        website: "https://portal-energie.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3312428.jpg",
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
        loginUrl: "https://portal-energie.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StromkreisPortalEnergieCollector.CONFIG);
    }
}
