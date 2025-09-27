
import { SketchCollector } from '../../sketchCollector';

export class BewBerlinerEnergieUndWarmeCollector extends SketchCollector {

    static CONFIG = {
        id: "bew_berliner_energie_und_warme",
        name: "BEW Berliner Energie und Warme",
        description: "i18n.collectors.bew_berliner_energie_und_warme.description",
        version: "0",
        website: "https://xn--wrme-service-berlin-gwb.vattenfall.de/cost/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4414790.jpg",
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
        entryUrl: "https://xn--wrme-service-berlin-gwb.vattenfall.de/cost/invoices",
    }

    constructor() {
        super(BewBerlinerEnergieUndWarmeCollector.CONFIG);
    }
}
