
import { SketchCollector } from '../../sketchCollector';

export class GogreenenergyAtCollector extends SketchCollector {

    static CONFIG = {
        id: "gogreenenergy_at",
        name: "gogreenenergy.at",
        description: "i18n.collectors.gogreenenergy_at.description",
        version: "0",
        website: "https://portal.gogreenenergy.at/index.php?page=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1322301.jpg",
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
        entryUrl: "https://portal.gogreenenergy.at/index.php?page=invoices",
    }

    constructor() {
        super(GogreenenergyAtCollector.CONFIG);
    }
}
