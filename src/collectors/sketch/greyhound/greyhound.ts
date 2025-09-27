
import { SketchCollector } from '../../sketchCollector';

export class GreyhoundCollector extends SketchCollector {

    static CONFIG = {
        id: "greyhound",
        name: "Greyhound",
        description: "i18n.collectors.greyhound.description",
        version: "0",
        website: "https://greyhound-software.com/gcc/mybills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78328.jpg",
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
        entryUrl: "https://greyhound-software.com/gcc/mybills",
    }

    constructor() {
        super(GreyhoundCollector.CONFIG);
    }
}
