
import { SketchCollector } from '../../sketchCollector';

export class StackfieldCollector extends SketchCollector {

    static CONFIG = {
        id: "stackfield",
        name: "Stackfield",
        description: "i18n.collectors.stackfield.description",
        version: "0",
        website: "https://www.stackfield.com/de/login.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29177.jpg",
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
        entryUrl: "https://www.stackfield.com/de/login.htm",
    }

    constructor() {
        super(StackfieldCollector.CONFIG);
    }
}
