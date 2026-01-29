
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WortmannCollector extends SketchCollector {

    static CONFIG = {
        id: "wortmann",
        name: "Wortmann",
        description: "i18n.collectors.wortmann.description",
        version: "0",
        website: "https://b2b.wortmann.de/de-de/profile/login.aspx?returnurl=%2fde-de%2fproductlist%2faktionsprodukte%2fherzlich-willkommen.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43967.jpg",
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
        loginUrl: "https://b2b.wortmann.de/de-de/profile/login.aspx?returnurl=%2fde-de%2fproductlist%2faktionsprodukte%2fherzlich-willkommen.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WortmannCollector.CONFIG);
    }
}
