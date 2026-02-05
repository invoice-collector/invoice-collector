
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HaberkornOsterreichCollector extends SketchCollector {

    static CONFIG = {
        id: "haberkorn_osterreich",
        name: "Haberkorn Osterreich",
        description: "i18n.collectors.haberkorn_osterreich.description",
        version: "0",
        website: "https://www.haberkorn.com/at/de/bestellungen/ausgeliefert",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3104172.jpg",
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
        loginUrl: "https://www.haberkorn.com/at/de/bestellungen/ausgeliefert",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HaberkornOsterreichCollector.CONFIG);
    }
}
