
import { SketchCollector } from '../../sketchCollector';

export class DkHostmasterCollector extends SketchCollector {

    static CONFIG = {
        id: "dk_hostmaster",
        name: "dk hostmaster",
        description: "i18n.collectors.dk_hostmaster.description",
        version: "0",
        website: "https://www.dk-hostmaster.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21982.jpg",
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
        entryUrl: "https://www.dk-hostmaster.dk",
    }

    constructor() {
        super(DkHostmasterCollector.CONFIG);
    }
}
