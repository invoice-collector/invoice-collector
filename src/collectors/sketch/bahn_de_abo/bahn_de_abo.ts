
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BahnDeAboCollector extends SketchCollector {

    static CONFIG = {
        id: "bahn_de_abo",
        name: "Bahn.de ABO",
        description: "i18n.collectors.bahn_de_abo.description",
        version: "0",
        website: "https://abo.bahn.de/?#/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2089819.jpg",
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
        loginUrl: "https://abo.bahn.de/?#/rechnungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BahnDeAboCollector.CONFIG);
    }
}
