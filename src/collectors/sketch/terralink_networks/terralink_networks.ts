
import { SketchCollector } from '../../sketchCollector';

export class TerralinkNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "terralink_networks",
        name: "terralink networks",
        description: "i18n.collectors.terralink_networks.description",
        version: "0",
        website: "https://www.terralink.de/dsl-festnetztarife-fuer-privatkunden.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9170.jpg",
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
        entryUrl: "https://www.terralink.de/dsl-festnetztarife-fuer-privatkunden.html",
    }

    constructor() {
        super(TerralinkNetworksCollector.CONFIG);
    }
}
