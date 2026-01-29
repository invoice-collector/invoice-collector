
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleRoedererCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_roederer",
        name: "Mutuelle Roederer",
        description: "i18n.collectors.mutuelle_roederer.description",
        version: "0",
        website: "https://www.roederer.fr/fr/particuliers",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130502.jpg",
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
        loginUrl: "https://www.roederer.fr/fr/particuliers",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleRoedererCollector.CONFIG);
    }
}
