
import { SketchCollector } from '../../sketchCollector';

export class BrightHouseNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "bright_house_networks",
        name: "Bright House Networks",
        description: "i18n.collectors.bright_house_networks.description",
        version: "0",
        website: "https://www.spectrum.net/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8647.jpg",
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
        entryUrl: "https://www.spectrum.net/login/",
    }

    constructor() {
        super(BrightHouseNetworksCollector.CONFIG);
    }
}
