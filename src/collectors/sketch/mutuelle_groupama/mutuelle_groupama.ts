
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGroupamaCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_groupama",
        name: "Mutuelle Groupama",
        description: "i18n.collectors.mutuelle_groupama.description",
        version: "0",
        website: "https://authentification.groupama.fr/cas/login?service=https%3A%2F%2Fauthentification.groupama.fr%2Fcas%2Foauth2.0%2FcallbackAuthorize&client_id=ecli_groupama",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129095.jpg",
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
        loginUrl: "https://authentification.groupama.fr/cas/login?service=https%3A%2F%2Fauthentification.groupama.fr%2Fcas%2Foauth2.0%2FcallbackAuthorize&client_id=ecli_groupama",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleGroupamaCollector.CONFIG);
    }
}
