
import { SketchCollector } from '../../sketchCollector';

export class SteilEnergieGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "steil_energie_gmbh",
        name: "Steil Energie GmbH",
        description: "i18n.collectors.steil_energie_gmbh.description",
        version: "0",
        website: "https://portal.steil-energie.de/aviacard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1811531.jpg",
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
        entryUrl: "https://portal.steil-energie.de/aviacard/invoices",
    }

    constructor() {
        super(SteilEnergieGmbhCollector.CONFIG);
    }
}
