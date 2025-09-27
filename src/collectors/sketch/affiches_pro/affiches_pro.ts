
import { SketchCollector } from '../../sketchCollector';

export class AffichesProCollector extends SketchCollector {

    static CONFIG = {
        id: "affiches_pro",
        name: "Affiches Pro",
        description: "i18n.collectors.affiches_pro.description",
        version: "0",
        website: "https://www.affichespro.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115734.jpg",
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
        entryUrl: "https://www.affichespro.com/",
    }

    constructor() {
        super(AffichesProCollector.CONFIG);
    }
}
