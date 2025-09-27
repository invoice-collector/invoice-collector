
import { SketchCollector } from '../../sketchCollector';

export class RftKabelCollector extends SketchCollector {

    static CONFIG = {
        id: "rft_kabel",
        name: "RFT Kabel",
        description: "i18n.collectors.rft_kabel.description",
        version: "0",
        website: "http://www.rftkabel.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9424.jpg",
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
        entryUrl: "http://www.rftkabel.de",
    }

    constructor() {
        super(RftKabelCollector.CONFIG);
    }
}
