
import { SketchCollector } from '../../sketchCollector';

export class PacklinkProEnCollector extends SketchCollector {

    static CONFIG = {
        id: "packlink_pro_en",
        name: "Packlink Pro EN",
        description: "i18n.collectors.packlink_pro_en.description",
        version: "0",
        website: "https://pro.packlink.com/private/shipments/ready-to-purchase",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2033076.jpg",
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
        entryUrl: "https://pro.packlink.com/private/shipments/ready-to-purchase",
    }

    constructor() {
        super(PacklinkProEnCollector.CONFIG);
    }
}
