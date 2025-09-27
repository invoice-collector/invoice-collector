
import { SketchCollector } from '../../sketchCollector';

export class GlacierNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "glacier_networks",
        name: "Glacier Networks",
        description: "i18n.collectors.glacier_networks.description",
        version: "0",
        website: "https://glacier.billcenter.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409486.jpg",
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
        entryUrl: "https://glacier.billcenter.net/",
    }

    constructor() {
        super(GlacierNetworksCollector.CONFIG);
    }
}
