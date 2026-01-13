
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BritaMybritaCollector extends SketchCollector {

    static CONFIG = {
        id: "brita_mybrita",
        name: "BRITA - MyBRITA",
        description: "i18n.collectors.brita_mybrita.description",
        version: "0",
        website: "http://www.brita.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30831.jpg",
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
        loginUrl: "http://www.brita.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BritaMybritaCollector.CONFIG);
    }
}
