
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleMutestCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mutest",
        name: "Mutuelle Mutest",
        description: "i18n.collectors.mutuelle_mutest.description",
        version: "0",
        website: "https://www.mutest.fr/particuliers/Acc%C3%A8s_extranets",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130358.jpg",
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
        loginUrl: "https://www.mutest.fr/particuliers/Acc%C3%A8s_extranets",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleMutestCollector.CONFIG);
    }
}
