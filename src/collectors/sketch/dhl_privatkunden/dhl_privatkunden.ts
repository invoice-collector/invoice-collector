
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DhlPrivatkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_privatkunden",
        name: "DHL-Privatkunden",
        description: "i18n.collectors.dhl_privatkunden.description",
        version: "0",
        website: "https://www.dhl.de/de/privatkunden/kundenkonto/meine-daten.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54156.jpg",
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
        loginUrl: "https://www.dhl.de/de/privatkunden/pakete-versenden/online-frankieren.html?type=ShoppingCartHistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DhlPrivatkundenCollector.CONFIG);
    }
}
