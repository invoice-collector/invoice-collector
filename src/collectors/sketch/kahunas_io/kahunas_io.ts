
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KahunasIoCollector extends SketchCollector {

    static CONFIG = {
        id: "kahunas_io",
        name: "Kahunas.io",
        description: "i18n.collectors.kahunas_io.description",
        version: "0",
        website: "https://kahunas.io/login?redirect=https%3A%2F%2Fkahunas.io%2Fprofile%2Fbilling",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515361.jpg",
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
        loginUrl: "https://kahunas.io/login?redirect=https%3A%2F%2Fkahunas.io%2Fprofile%2Fbilling",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KahunasIoCollector.CONFIG);
    }
}
