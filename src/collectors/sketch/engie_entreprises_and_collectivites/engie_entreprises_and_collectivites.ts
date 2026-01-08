
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EngieEntreprisesAndCollectivitesCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_entreprises_and_collectivites",
        name: "Engie Entreprises & Collectivités (.fr)",
        description: "i18n.collectors.engie_entreprises_and_collectivites.description",
        version: "0",
        website: "https://espace-client.entreprises-collectivites.engie.fr/eec/#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/670852.jpg",
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
        loginUrl: "https://espace-client.entreprises-collectivites.engie.fr/eec/#/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EngieEntreprisesAndCollectivitesCollector.CONFIG);
    }
}
