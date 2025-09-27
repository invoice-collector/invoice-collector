
import { SketchCollector } from '../../sketchCollector';

export class SimplrCollector extends SketchCollector {

    static CONFIG = {
        id: "simplr",
        name: "simplr",
        description: "i18n.collectors.simplr.description",
        version: "0",
        website: "https://login.simplr.de/#/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/421664.jpg",
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
        entryUrl: "https://login.simplr.de/#/documents",
    }

    constructor() {
        super(SimplrCollector.CONFIG);
    }
}
