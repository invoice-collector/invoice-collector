
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonsieurTelecommandeCollector extends SketchCollector {

    static CONFIG = {
        id: "monsieur_telecommande",
        name: "Monsieur telecommande",
        description: "i18n.collectors.monsieur_telecommande.description",
        version: "0",
        website: "https://www.telecommande.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122259.jpg",
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
        entryUrl: "https://www.telecommande.com/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonsieurTelecommandeCollector.CONFIG);
    }
}
