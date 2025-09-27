
import { SketchCollector } from '../../sketchCollector';

export class KatanaCollector extends SketchCollector {

    static CONFIG = {
        id: "katana",
        name: "Katana",
        description: "i18n.collectors.katana.description",
        version: "0",
        website: "https://katanamrp.recurly.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4554141.jpg",
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
        entryUrl: "https://katanamrp.recurly.com/account",
    }

    constructor() {
        super(KatanaCollector.CONFIG);
    }
}
