
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NextmobilesCollector extends SketchCollector {

    static CONFIG = {
        id: "nextmobiles",
        name: "Nextmobiles",
        description: "i18n.collectors.nextmobiles.description",
        version: "0",
        website: "https://www.nextmobiles.com/moncompte/mes-factures/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3015109.jpg",
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
        loginUrl: "https://www.nextmobiles.com/moncompte/mes-factures/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NextmobilesCollector.CONFIG);
    }
}
