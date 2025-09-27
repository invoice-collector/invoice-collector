
import { SketchCollector } from '../../sketchCollector';

export class DonedoneCollector extends SketchCollector {

    static CONFIG = {
        id: "donedone",
        name: "DoneDone",
        description: "i18n.collectors.donedone.description",
        version: "0",
        website: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18805.jpg",
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
        entryUrl: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
    }

    constructor() {
        super(DonedoneCollector.CONFIG);
    }
}
