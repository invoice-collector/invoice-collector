
import { SketchCollector } from '../../sketchCollector';

export class CgImmobilierLogeImmobilierCollector extends SketchCollector {

    static CONFIG = {
        id: "cg_immobilier_loge_immobilier",
        name: "CG Immobilier - Loge Immobilier",
        description: "i18n.collectors.cg_immobilier_loge_immobilier.description",
        version: "0",
        website: "https://extranet.ics.fr/V4/connexion-logeimmobilier.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108535.jpg",
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
        entryUrl: "https://extranet.ics.fr/V4/connexion-logeimmobilier.html",
    }

    constructor() {
        super(CgImmobilierLogeImmobilierCollector.CONFIG);
    }
}
