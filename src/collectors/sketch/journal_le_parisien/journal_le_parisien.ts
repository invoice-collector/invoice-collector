
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JournalLeParisienCollector extends SketchCollector {

    static CONFIG = {
        id: "journal_le_parisien",
        name: "Journal LE PARISIEN",
        description: "i18n.collectors.journal_le_parisien.description",
        version: "0",
        website: "https://serviceclients.leparisien.fr/abonnement/paiements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1470158.jpg",
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
        loginUrl: "https://serviceclients.leparisien.fr/abonnement/paiements",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JournalLeParisienCollector.CONFIG);
    }
}
