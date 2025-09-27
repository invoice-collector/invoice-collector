
import { SketchCollector } from '../../sketchCollector';

export class MewaCollector extends SketchCollector {

    static CONFIG = {
        id: "mewa",
        name: "MEWA",
        description: "i18n.collectors.mewa.description",
        version: "0",
        website: "https://www.mymewa.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74802.jpg",
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
        entryUrl: "https://www.mymewa.com",
    }

    constructor() {
        super(MewaCollector.CONFIG);
    }
}
