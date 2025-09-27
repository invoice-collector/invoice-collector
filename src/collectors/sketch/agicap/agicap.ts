
import { SketchCollector } from '../../sketchCollector';

export class AgicapCollector extends SketchCollector {

    static CONFIG = {
        id: "agicap",
        name: "Agicap",
        description: "i18n.collectors.agicap.description",
        version: "0",
        website: "https://app.agicap.com/fr/app/user/recuPaiement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/678190.jpg",
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
        entryUrl: "https://app.agicap.com/fr/app/user/recuPaiement",
    }

    constructor() {
        super(AgicapCollector.CONFIG);
    }
}
