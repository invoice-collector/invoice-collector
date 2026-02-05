
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtmobilDeCarsharingCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtmobil_de_carsharing",
        name: "stadtmobil.de - carsharing",
        description: "i18n.collectors.stadtmobil_de_carsharing.description",
        version: "0",
        website: "https://mein.stadtmobil.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/5433.jpg",
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
        loginUrl: "https://mein.stadtmobil.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtmobilDeCarsharingCollector.CONFIG);
    }
}
