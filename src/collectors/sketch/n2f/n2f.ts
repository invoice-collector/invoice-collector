
import { SketchCollector } from '../../sketchCollector';

export class N2fCollector extends SketchCollector {

    static CONFIG = {
        id: "n2f",
        name: "N2F",
        description: "i18n.collectors.n2f.description",
        version: "0",
        website: "https://www.n2f.com/app/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060599.jpg",
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
        entryUrl: "https://www.n2f.com/app/#/",
    }

    constructor() {
        super(N2fCollector.CONFIG);
    }
}
