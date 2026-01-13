
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FideliLesGentlemenParticuliersCollector extends SketchCollector {

    static CONFIG = {
        id: "fideli_les_gentlemen_particuliers",
        name: "Fideli - Les Gentlemen - Particuliers",
        description: "i18n.collectors.fideli_les_gentlemen_particuliers.description",
        version: "0",
        website: "https://www.gentlemen-demenagement.com/demenagement-particuliers/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118872.jpg",
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
        loginUrl: "https://www.gentlemen-demenagement.com/demenagement-particuliers/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FideliLesGentlemenParticuliersCollector.CONFIG);
    }
}
