
import { SketchCollector } from '../../sketchCollector';

export class ActionMagasinsFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "action_magasins_france",
        name: "Action Magasins France",
        description: "i18n.collectors.action_magasins_france.description",
        version: "0",
        website: "https://www.action.com/fr-fr/mon-action/#mes-tickets-de-caisse",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445822.jpg",
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
        entryUrl: "https://www.action.com/fr-fr/mon-action/#mes-tickets-de-caisse",
    }

    constructor() {
        super(ActionMagasinsFranceCollector.CONFIG);
    }
}
