
import { SketchCollector } from '../../sketchCollector';

export class FastbillCollector extends SketchCollector {

    static CONFIG = {
        id: "fastbill",
        name: "FastBill",
        description: "i18n.collectors.fastbill.description",
        version: "0",
        website: "https://my.fastbill.com/index.php?cmd=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492.jpg",
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
        entryUrl: "https://my.fastbill.com/index.php?cmd=1",
    }

    constructor() {
        super(FastbillCollector.CONFIG);
    }
}
