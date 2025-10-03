
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TonerFrCollector extends SketchCollector {

    static CONFIG = {
        id: "toner_fr",
        name: "Toner.fr",
        description: "i18n.collectors.toner_fr.description",
        version: "0",
        website: "https://www.toner.fr/connexion-inscription.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123498.jpg",
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
        entryUrl: "https://www.toner.fr/connexion-inscription.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TonerFrCollector.CONFIG);
    }
}
