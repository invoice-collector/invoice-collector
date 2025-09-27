
import { SketchCollector } from '../../sketchCollector';

export class EamGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "eam_gmbh_and_co_kg",
        name: "EAM GmbH & Co. KG",
        description: "i18n.collectors.eam_gmbh_and_co_kg.description",
        version: "0",
        website: "https://eam.mein-portal.de/swp/eam/BILLING",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801004.jpg",
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
        entryUrl: "https://eam.mein-portal.de/swp/eam/BILLING",
    }

    constructor() {
        super(EamGmbhAndCoKgCollector.CONFIG);
    }
}
