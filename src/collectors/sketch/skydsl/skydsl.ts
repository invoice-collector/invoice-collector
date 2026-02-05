
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SkydslCollector extends SketchCollector {

    static CONFIG = {
        id: "skydsl",
        name: "SkyDSL",
        description: "i18n.collectors.skydsl.description",
        version: "0",
        website: "https://www.skydsl.eu/de-DE/Privatkunden/Satelliten-Internet/customer/faccount/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310229.jpg",
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
        loginUrl: "https://www.skydsl.eu/de-DE/Privatkunden/Satelliten-Internet/customer/faccount/invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SkydslCollector.CONFIG);
    }
}
