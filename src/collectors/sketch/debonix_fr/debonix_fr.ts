
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DebonixFrCollector extends SketchCollector {

    static CONFIG = {
        id: "debonix_fr",
        name: "Debonix.fr",
        description: "i18n.collectors.debonix_fr.description",
        version: "0",
        website: "https://www.debonix.fr/customer/account/create/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118390.jpg",
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
        entryUrl: "https://www.debonix.fr/customer/account/create/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DebonixFrCollector.CONFIG);
    }
}
