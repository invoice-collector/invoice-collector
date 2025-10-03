
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NeklanCollector extends SketchCollector {

    static CONFIG = {
        id: "neklan",
        name: "Neklan",
        description: "i18n.collectors.neklan.description",
        version: "0",
        website: "https://www.neklan.fr/fr/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/883263.jpg",
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
        entryUrl: "https://www.neklan.fr/fr/authentification?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NeklanCollector.CONFIG);
    }
}
