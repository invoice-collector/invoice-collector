
import { SketchCollector } from '../../sketchCollector';

export class ToowayDeCollector extends SketchCollector {

    static CONFIG = {
        id: "tooway_de",
        name: "tooway.de",
        description: "i18n.collectors.tooway_de.description",
        version: "0",
        website: "http://www.tooway.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9210.jpg",
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
        entryUrl: "http://www.tooway.de",
    }

    constructor() {
        super(ToowayDeCollector.CONFIG);
    }
}
