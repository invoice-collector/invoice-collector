
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SteuerakademieHessenCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerakademie_hessen",
        name: "Steuerakademie Hessen",
        description: "i18n.collectors.steuerakademie_hessen.description",
        version: "0",
        website: "https://steuerakademie-hessen.de/kundenkontogesamtuebersicht/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/753064.jpg",
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
        loginUrl: "https://steuerakademie-hessen.de/kundenkontogesamtuebersicht/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SteuerakademieHessenCollector.CONFIG);
    }
}
