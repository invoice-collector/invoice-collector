
import { SketchCollector } from '../../sketchCollector';

export class FlightstatsCollector extends SketchCollector {

    static CONFIG = {
        id: "flightstats",
        name: "Flightstats",
        description: "i18n.collectors.flightstats.description",
        version: "0",
        website: "https://www.flightstats.com/v2/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778924.jpg",
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
        entryUrl: "https://www.flightstats.com/v2/",
    }

    constructor() {
        super(FlightstatsCollector.CONFIG);
    }
}
