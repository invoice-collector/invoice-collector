
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EroplacePlCollector extends SketchCollector {

    static CONFIG = {
        id: "eroplace_pl",
        name: "Eroplace.pl",
        description: "i18n.collectors.eroplace_pl.description",
        version: "0",
        website: "https://en.eroplace.pl/moje-konto/zamowienia",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3274076.jpg",
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
        loginUrl: "https://en.eroplace.pl/moje-konto/zamowienia",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EroplacePlCollector.CONFIG);
    }
}
