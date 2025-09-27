
import { SketchCollector } from '../../sketchCollector';

export class VegaNetCollector extends SketchCollector {

    static CONFIG = {
        id: "vega_net",
        name: "VEGA-net",
        description: "i18n.collectors.vega_net.description",
        version: "0",
        website: "https://mein.vega-net.de/#{1}",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9232.jpg",
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
        entryUrl: "https://mein.vega-net.de/#{1}",
    }

    constructor() {
        super(VegaNetCollector.CONFIG);
    }
}
