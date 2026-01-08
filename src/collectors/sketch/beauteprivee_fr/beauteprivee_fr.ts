
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BeautepriveeFrCollector extends SketchCollector {

    static CONFIG = {
        id: "beauteprivee_fr",
        name: "BeautePrivee.fr",
        description: "i18n.collectors.beauteprivee_fr.description",
        version: "0",
        website: "https://www.beauteprivee.fr/signin/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115924.jpg",
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
        loginUrl: "https://www.beauteprivee.fr/signin/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeautepriveeFrCollector.CONFIG);
    }
}
