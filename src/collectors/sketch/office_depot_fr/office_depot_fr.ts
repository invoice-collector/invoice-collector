
import { SketchCollector } from '../../sketchCollector';

export class OfficeDepotFrCollector extends SketchCollector {

    static CONFIG = {
        id: "office_depot_fr",
        name: "Office Depot (.fr)",
        description: "i18n.collectors.office_depot_fr.description",
        version: "0",
        website: "https://www.officedepot.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122529.jpg",
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
        entryUrl: "https://www.officedepot.fr/",
    }

    constructor() {
        super(OfficeDepotFrCollector.CONFIG);
    }
}
