
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HomirisCollector extends SketchCollector {

    static CONFIG = {
        id: "homiris",
        name: "Homiris",
        description: "i18n.collectors.homiris.description",
        version: "0",
        website: "https://abonnes.homiris.fr/fr/client/myAccount.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181804.jpg",
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
        entryUrl: "https://abonnes.homiris.fr/fr/client/myAccount.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HomirisCollector.CONFIG);
    }
}
