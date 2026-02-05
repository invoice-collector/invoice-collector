
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LohmannUndRauscherDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "lohmann_und_rauscher_deutschland",
        name: "Lohmann und Rauscher Deutschland",
        description: "i18n.collectors.lohmann_und_rauscher_deutschland.description",
        version: "0",
        website: "https://store-de.lrmed.com/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396885.jpg",
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
        loginUrl: "https://store-de.lrmed.com/mein-konto/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LohmannUndRauscherDeutschlandCollector.CONFIG);
    }
}
