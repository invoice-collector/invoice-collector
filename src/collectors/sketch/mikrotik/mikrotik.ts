
import { SketchCollector } from '../../sketchCollector';

export class MikrotikCollector extends SketchCollector {

    static CONFIG = {
        id: "mikrotik",
        name: "Mikrotik",
        description: "i18n.collectors.mikrotik.description",
        version: "0",
        website: "https://mikrotik.com/client/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148967.jpg",
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
        entryUrl: "https://mikrotik.com/client/orders",
    }

    constructor() {
        super(MikrotikCollector.CONFIG);
    }
}
