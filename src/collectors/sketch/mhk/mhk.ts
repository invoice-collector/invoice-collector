
import { SketchCollector } from '../../sketchCollector';

export class MhkCollector extends SketchCollector {

    static CONFIG = {
        id: "mhk",
        name: "MHK",
        description: "i18n.collectors.mhk.description",
        version: "0",
        website: "https://www.mhk.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862995.jpg",
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
        entryUrl: "https://www.mhk.net/",
    }

    constructor() {
        super(MhkCollector.CONFIG);
    }
}
