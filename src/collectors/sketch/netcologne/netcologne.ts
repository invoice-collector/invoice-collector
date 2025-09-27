
import { SketchCollector } from '../../sketchCollector';

export class NetcologneCollector extends SketchCollector {

    static CONFIG = {
        id: "netcologne",
        name: "NetCologne",
        description: "i18n.collectors.netcologne.description",
        version: "0",
        website: "https://onlineservice.netcologne.de/portal/customer/invoice.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8155.jpg",
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
        entryUrl: "https://onlineservice.netcologne.de/portal/customer/invoice.htm",
    }

    constructor() {
        super(NetcologneCollector.CONFIG);
    }
}
