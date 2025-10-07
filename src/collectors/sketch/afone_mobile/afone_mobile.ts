
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AfoneMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "afone_mobile",
        name: "Afone Mobile",
        description: "i18n.collectors.afone_mobile.description",
        version: "0",
        website: "https://m2m.afonemobile.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415595.jpg",
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
        entryUrl: "https://m2m.afonemobile.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AfoneMobileCollector.CONFIG);
    }
}
