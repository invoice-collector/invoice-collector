
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BoxtalCollector extends SketchCollector {

    static CONFIG = {
        id: "boxtal",
        name: "Boxtal",
        description: "i18n.collectors.boxtal.description",
        version: "0",
        website: "https://www.boxtal.com/fr/fr/app/utilisateur/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36583.jpg",
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
        loginUrl: "https://www.boxtal.com/fr/fr/app/utilisateur/connexion",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BoxtalCollector.CONFIG);
    }
}
