
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaisonsDuMondeCollector extends SketchCollector {

    static CONFIG = {
        id: "maisons_du_monde",
        name: "Maisons du Monde",
        description: "i18n.collectors.maisons_du_monde.description",
        version: "0",
        website: "https://www.maisonsdumonde.com/DE/de/account/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104670.jpg",
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
        entryUrl: "https://www.maisonsdumonde.com/DE/de/account/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaisonsDuMondeCollector.CONFIG);
    }
}
