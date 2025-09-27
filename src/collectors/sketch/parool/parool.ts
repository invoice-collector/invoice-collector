
import { SketchCollector } from '../../sketchCollector';

export class ParoolCollector extends SketchCollector {

    static CONFIG = {
        id: "parool",
        name: "Parool",
        description: "i18n.collectors.parool.description",
        version: "0",
        website: "https://www.parool.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4196119.jpg",
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
        entryUrl: "https://www.parool.nl/login",
    }

    constructor() {
        super(ParoolCollector.CONFIG);
    }
}
