
import { SketchCollector } from '../../sketchCollector';

export class PacketaComCollector extends SketchCollector {

    static CONFIG = {
        id: "packeta_com",
        name: "Packeta.com",
        description: "i18n.collectors.packeta_com.description",
        version: "0",
        website: "https://client.packeta.com/en/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211149.jpg",
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
        entryUrl: "https://client.packeta.com/en/invoices/",
    }

    constructor() {
        super(PacketaComCollector.CONFIG);
    }
}
