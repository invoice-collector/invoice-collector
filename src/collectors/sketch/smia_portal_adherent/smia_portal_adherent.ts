
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SmiaPortalAdherentCollector extends SketchCollector {

    static CONFIG = {
        id: "smia_portal_adherent",
        name: "SMIA Portal - Adherent",
        description: "i18n.collectors.smia_portal_adherent.description",
        version: "0",
        website: "https://portail.sante-travail.net/MesDocuments/MesFactures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503345.jpg",
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
        loginUrl: "https://portail.sante-travail.net/MesDocuments/MesFactures",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SmiaPortalAdherentCollector.CONFIG);
    }
}
