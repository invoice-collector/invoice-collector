
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Maut1DeCollector extends SketchCollector {

    static CONFIG = {
        id: "maut1_de",
        name: "maut1.de",
        description: "i18n.collectors.maut1_de.description",
        version: "0",
        website: "https://www.maut1.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4182167.jpg",
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
        loginUrl: "https://www.maut1.de/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(Maut1DeCollector.CONFIG);
    }
}
