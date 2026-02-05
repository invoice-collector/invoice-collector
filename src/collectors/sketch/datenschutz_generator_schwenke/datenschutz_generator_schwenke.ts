
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DatenschutzGeneratorSchwenkeCollector extends SketchCollector {

    static CONFIG = {
        id: "datenschutz_generator_schwenke",
        name: "Datenschutz Generator Schwenke",
        description: "i18n.collectors.datenschutz_generator_schwenke.description",
        version: "0",
        website: "https://datenschutz-generator.de/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399193.jpg",
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
        loginUrl: "https://datenschutz-generator.de/mein-konto/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DatenschutzGeneratorSchwenkeCollector.CONFIG);
    }
}
