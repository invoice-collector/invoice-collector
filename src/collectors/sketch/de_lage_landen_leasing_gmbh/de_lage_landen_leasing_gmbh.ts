
import { SketchCollector } from '../../sketchCollector';

export class DeLageLandenLeasingGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "de_lage_landen_leasing_gmbh",
        name: "De Lage Landen Leasing GmbH",
        description: "i18n.collectors.de_lage_landen_leasing_gmbh.description",
        version: "0",
        website: "https://www.directinvoices.com/en/documents/1Q6qz2dO6ikfiMOivWyl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1986233.jpg",
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
        entryUrl: "https://www.directinvoices.com/en/documents/1Q6qz2dO6ikfiMOivWyl",
    }

    constructor() {
        super(DeLageLandenLeasingGmbhCollector.CONFIG);
    }
}
