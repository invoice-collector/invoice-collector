
import { SketchCollector } from '../../sketchCollector';

export class SeterusCollector extends SketchCollector {

    static CONFIG = {
        id: "seterus",
        name: "Seterus",
        description: "i18n.collectors.seterus.description",
        version: "0",
        website: "http://www.seterus.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8658.jpg",
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
        entryUrl: "http://www.seterus.com",
    }

    constructor() {
        super(SeterusCollector.CONFIG);
    }
}
