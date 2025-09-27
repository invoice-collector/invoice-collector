
import { SketchCollector } from '../../sketchCollector';

export class PlanforCollector extends SketchCollector {

    static CONFIG = {
        id: "planfor",
        name: "Planfor",
        description: "i18n.collectors.planfor.description",
        version: "0",
        website: "https://www.planfor.fr/index.php?action=formulaire_contact&etape=1&orig=moncpte&langue=FR",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122800.jpg",
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
        entryUrl: "https://www.planfor.fr/index.php?action=formulaire_contact&etape=1&orig=moncpte&langue=FR",
    }

    constructor() {
        super(PlanforCollector.CONFIG);
    }
}
