
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TriviarKurseUndWorkshopsCollector extends SketchCollector {

    static CONFIG = {
        id: "triviar_kurse_und_workshops",
        name: "Triviar - Kurse und Workshops",
        description: "i18n.collectors.triviar_kurse_und_workshops.description",
        version: "0",
        website: "https://triviar.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1098159.jpg",
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
        loginUrl: "https://triviar.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TriviarKurseUndWorkshopsCollector.CONFIG);
    }
}
