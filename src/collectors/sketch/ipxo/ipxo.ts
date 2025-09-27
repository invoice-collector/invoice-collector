
import { SketchCollector } from '../../sketchCollector';

export class IpxoCollector extends SketchCollector {

    static CONFIG = {
        id: "ipxo",
        name: "IPXO",
        description: "i18n.collectors.ipxo.description",
        version: "0",
        website: "https://www.ipxo.com/portal/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1287632.jpg",
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
        entryUrl: "https://www.ipxo.com/portal/login",
    }

    constructor() {
        super(IpxoCollector.CONFIG);
    }
}
