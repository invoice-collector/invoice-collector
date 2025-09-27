
import { SketchCollector } from '../../sketchCollector';

export class IdocusCollector extends SketchCollector {

    static CONFIG = {
        id: "idocus",
        name: "IDOCUS",
        description: "i18n.collectors.idocus.description",
        version: "0",
        website: "https://www.idocus.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778925.jpg",
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
        entryUrl: "https://www.idocus.com/",
    }

    constructor() {
        super(IdocusCollector.CONFIG);
    }
}
