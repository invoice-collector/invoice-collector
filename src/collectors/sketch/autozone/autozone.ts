
import { SketchCollector } from '../../sketchCollector';

export class AutozoneCollector extends SketchCollector {

    static CONFIG = {
        id: "autozone",
        name: "AutoZone",
        description: "i18n.collectors.autozone.description",
        version: "0",
        website: "https://www.autozonepro.com/ui/transaction-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4447016.jpg",
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
        entryUrl: "https://www.autozonepro.com/ui/transaction-history",
    }

    constructor() {
        super(AutozoneCollector.CONFIG);
    }
}
