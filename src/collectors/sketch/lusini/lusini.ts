
import { SketchCollector } from '../../sketchCollector';

export class LusiniCollector extends SketchCollector {

    static CONFIG = {
        id: "lusini",
        name: "Lusini",
        description: "i18n.collectors.lusini.description",
        version: "0",
        website: "http://www.lusini.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/83339.jpg",
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
        entryUrl: "http://www.lusini.de",
    }

    constructor() {
        super(LusiniCollector.CONFIG);
    }
}
