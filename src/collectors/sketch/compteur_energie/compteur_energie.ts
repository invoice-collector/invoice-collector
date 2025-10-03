
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CompteurEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "compteur_energie",
        name: "Compteur-energie",
        description: "i18n.collectors.compteur_energie.description",
        version: "0",
        website: "http://www.compteur-energie.com/mag/fr/acc_account.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27358.jpg",
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
        entryUrl: "http://www.compteur-energie.com/mag/fr/acc_account.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CompteurEnergieCollector.CONFIG);
    }
}
