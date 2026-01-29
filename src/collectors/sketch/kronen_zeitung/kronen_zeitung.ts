
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KronenZeitungCollector extends SketchCollector {

    static CONFIG = {
        id: "kronen_zeitung",
        name: "Kronen Zeitung",
        description: "i18n.collectors.kronen_zeitung.description",
        version: "0",
        website: "https://www.krone.at/#/KRN/modify",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4564647.jpg",
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
        loginUrl: "https://www.krone.at/#/KRN/modify",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KronenZeitungCollector.CONFIG);
    }
}
