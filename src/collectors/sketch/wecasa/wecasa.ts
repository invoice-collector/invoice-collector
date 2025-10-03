
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WecasaCollector extends SketchCollector {

    static CONFIG = {
        id: "wecasa",
        name: "wecasa",
        description: "i18n.collectors.wecasa.description",
        version: "0",
        website: "https://www.wecasa.fr/espace-client/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654208.jpg",
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
        entryUrl: "https://www.wecasa.fr/espace-client/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WecasaCollector.CONFIG);
    }
}
