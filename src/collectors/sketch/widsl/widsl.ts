
import { SketchCollector } from '../../sketchCollector';

export class WidslCollector extends SketchCollector {

    static CONFIG = {
        id: "widsl",
        name: "wiDSL",
        description: "i18n.collectors.widsl.description",
        version: "0",
        website: "https://www.widsl.de/loginformular",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9200.jpg",
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
        entryUrl: "https://www.widsl.de/loginformular",
    }

    constructor() {
        super(WidslCollector.CONFIG);
    }
}
