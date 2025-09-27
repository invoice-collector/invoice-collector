
import { SketchCollector } from '../../sketchCollector';

export class BaldorfoodCollector extends SketchCollector {

    static CONFIG = {
        id: "baldorfood",
        name: "Baldorfood",
        description: "i18n.collectors.baldorfood.description",
        version: "0",
        website: "https://www.baldorfood.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2408686.jpg",
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
        entryUrl: "https://www.baldorfood.com/",
    }

    constructor() {
        super(BaldorfoodCollector.CONFIG);
    }
}
