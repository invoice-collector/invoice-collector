
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EkwateurCollector extends SketchCollector {

    static CONFIG = {
        id: "ekwateur",
        name: "ekWateur",
        description: "i18n.collectors.ekwateur.description",
        version: "0",
        website: "https://ekwateur.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778920.jpg",
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
        entryUrl: "https://ekwateur.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EkwateurCollector.CONFIG);
    }
}
