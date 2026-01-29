
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PrevenoPadoaEmployerCollector extends SketchCollector {

    static CONFIG = {
        id: "preveno_padoa_employer",
        name: "Preveno (Padoa) - Employer",
        description: "i18n.collectors.preveno_padoa_employer.description",
        version: "0",
        website: "https://preveno.padoa.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503412.jpg",
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
        loginUrl: "https://preveno.padoa.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PrevenoPadoaEmployerCollector.CONFIG);
    }
}
