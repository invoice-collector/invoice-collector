
import { SketchCollector } from '../../sketchCollector';

export class EkooknaCollector extends SketchCollector {

    static CONFIG = {
        id: "ekookna",
        name: "Ekookna",
        description: "i18n.collectors.ekookna.description",
        version: "0",
        website: "https://eko4u.com/?p=billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1255824.jpg",
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
        entryUrl: "https://eko4u.com/?p=billing",
    }

    constructor() {
        super(EkooknaCollector.CONFIG);
    }
}
