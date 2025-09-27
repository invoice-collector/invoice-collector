
import { SketchCollector } from '../../sketchCollector';

export class TotalBelgiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "total_belgique",
        name: "Total Belgique",
        description: "i18n.collectors.total_belgique.description",
        version: "0",
        website: "https://services.totalenergies.be/fr/mes-espaces-personnels",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037334.jpg",
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
        entryUrl: "https://services.totalenergies.be/fr/mes-espaces-personnels",
    }

    constructor() {
        super(TotalBelgiqueCollector.CONFIG);
    }
}
