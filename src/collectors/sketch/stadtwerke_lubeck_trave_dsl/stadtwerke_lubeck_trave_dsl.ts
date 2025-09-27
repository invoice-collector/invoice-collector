
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeLubeckTraveDslCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_lubeck_trave_dsl",
        name: "Stadtwerke Lubeck - Trave DSL",
        description: "i18n.collectors.stadtwerke_lubeck_trave_dsl.description",
        version: "0",
        website: "http://www.swhl.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9167.jpg",
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
        entryUrl: "http://www.swhl.de",
    }

    constructor() {
        super(StadtwerkeLubeckTraveDslCollector.CONFIG);
    }
}
