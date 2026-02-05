
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SalestubeCollector extends SketchCollector {

    static CONFIG = {
        id: "salestube",
        name: "SalesTube",
        description: "i18n.collectors.salestube.description",
        version: "0",
        website: "https://aff.salestube.pl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233741.jpg",
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
        loginUrl: "https://aff.salestube.pl/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SalestubeCollector.CONFIG);
    }
}
