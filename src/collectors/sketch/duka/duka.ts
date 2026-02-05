
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DukaCollector extends SketchCollector {

    static CONFIG = {
        id: "duka",
        name: "Duka",
        description: "i18n.collectors.duka.description",
        version: "0",
        website: "https://www.duka.dk/mit-duka/fakturaer/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1271727.jpg",
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
        loginUrl: "https://www.duka.dk/mit-duka/fakturaer/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DukaCollector.CONFIG);
    }
}
