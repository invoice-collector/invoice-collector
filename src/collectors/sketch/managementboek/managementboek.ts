
import { SketchCollector } from '../../sketchCollector';

export class ManagementboekCollector extends SketchCollector {

    static CONFIG = {
        id: "managementboek",
        name: "Managementboek",
        description: "i18n.collectors.managementboek.description",
        version: "0",
        website: "https://www.managementboek.nl/uwaccount/overzicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33051.jpg",
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
        entryUrl: "https://www.managementboek.nl/uwaccount/overzicht",
    }

    constructor() {
        super(ManagementboekCollector.CONFIG);
    }
}
