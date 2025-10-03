
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UbaldiComCollector extends SketchCollector {

    static CONFIG = {
        id: "ubaldi_com",
        name: "Ubaldi.com",
        description: "i18n.collectors.ubaldi_com.description",
        version: "0",
        website: "https://www.ubaldi.com/espace-perso/identification.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26985.jpg",
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
        entryUrl: "https://www.ubaldi.com/espace-perso/identification.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UbaldiComCollector.CONFIG);
    }
}
