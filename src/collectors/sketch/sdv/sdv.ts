
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SdvCollector extends SketchCollector {

    static CONFIG = {
        id: "sdv",
        name: "SDV",
        description: "i18n.collectors.sdv.description",
        version: "0",
        website: "https://www.sdvfrance.fr/connexion?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132310.jpg",
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
        entryUrl: "https://www.sdvfrance.fr/connexion?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SdvCollector.CONFIG);
    }
}
