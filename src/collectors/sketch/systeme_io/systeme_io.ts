
import { SketchCollector } from '../../sketchCollector';

export class SystemeIoCollector extends SketchCollector {

    static CONFIG = {
        id: "systeme_io",
        name: "systeme.io",
        description: "i18n.collectors.systeme_io.description",
        version: "0",
        website: "https://systeme.io/dashboard/payment/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519916.jpg",
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
        entryUrl: "https://systeme.io/dashboard/payment/transactions",
    }

    constructor() {
        super(SystemeIoCollector.CONFIG);
    }
}
