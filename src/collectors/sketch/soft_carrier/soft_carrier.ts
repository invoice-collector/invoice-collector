
import { SketchCollector } from '../../sketchCollector';

export class SoftCarrierCollector extends SketchCollector {

    static CONFIG = {
        id: "soft_carrier",
        name: "soft-carrier",
        description: "i18n.collectors.soft_carrier.description",
        version: "0",
        website: "https://www.softcarrier.de/hbdb/vshop/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26544.jpg",
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
        entryUrl: "https://www.softcarrier.de/hbdb/vshop/index.php",
    }

    constructor() {
        super(SoftCarrierCollector.CONFIG);
    }
}
