
import { SketchCollector } from '../../sketchCollector';

export class EcomdataGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "ecomdata_gmbh",
        name: "ecomDATA GmbH",
        description: "i18n.collectors.ecomdata_gmbh.description",
        version: "0",
        website: "https://my.ecomdata.de/clientarea.php?_ga=2.6130931.1786468032.1601532605-1955470257.1601532605",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/508958.jpg",
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
        entryUrl: "https://my.ecomdata.de/clientarea.php?_ga=2.6130931.1786468032.1601532605-1955470257.1601532605",
    }

    constructor() {
        super(EcomdataGmbhCollector.CONFIG);
    }
}
