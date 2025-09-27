
import { SketchCollector } from '../../sketchCollector';

export class PacklinkDeCollector extends SketchCollector {

    static CONFIG = {
        id: "packlink_de",
        name: "packlink.de",
        description: "i18n.collectors.packlink_de.description",
        version: "0",
        website: "https://www.packlink.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9753.jpg",
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
        entryUrl: "https://www.packlink.de/",
    }

    constructor() {
        super(PacklinkDeCollector.CONFIG);
    }
}
