
import { SketchCollector } from '../../sketchCollector';

export class DontaliaCollector extends SketchCollector {

    static CONFIG = {
        id: "dontalia",
        name: "Dontalia",
        description: "i18n.collectors.dontalia.description",
        version: "0",
        website: "https://www.dontalia.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415136.jpg",
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
        entryUrl: "https://www.dontalia.com/login",
    }

    constructor() {
        super(DontaliaCollector.CONFIG);
    }
}
