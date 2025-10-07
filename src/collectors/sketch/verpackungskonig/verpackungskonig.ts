
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VerpackungskonigCollector extends SketchCollector {

    static CONFIG = {
        id: "verpackungskonig",
        name: "VerpackungsKonig",
        description: "i18n.collectors.verpackungskonig.description",
        version: "0",
        website: "https://verpackungskoenig.de/registrieren.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9431.jpg",
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
        entryUrl: "https://verpackungskoenig.de/registrieren.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VerpackungskonigCollector.CONFIG);
    }
}
