
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';

export class EtepeteteCollector extends SketchCollector {

    static CONFIG = {
        id: "etepetete",
        name: "etepetete",
        description: "i18n.collectors.etepetete.description",
        version: "0",
        website: "https://etepetete-bio.de/mein-konto/#lastorder",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37156.jpg",
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
        loginUrl: "https://etepetete-bio.de/mein-konto/#lastorder",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EtepeteteCollector.CONFIG);
    }
}
