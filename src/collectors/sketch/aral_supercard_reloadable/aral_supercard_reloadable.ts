
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AralSupercardReloadableCollector extends SketchCollector {

    static CONFIG = {
        id: "aral_supercard_reloadable",
        name: "Aral Supercard Reloadable",
        description: "i18n.collectors.aral_supercard_reloadable.description",
        version: "0",
        website: "https://reload.aral-supercard.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153511.jpg",
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
        loginUrl: "https://reload.aral-supercard.de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AralSupercardReloadableCollector.CONFIG);
    }
}
