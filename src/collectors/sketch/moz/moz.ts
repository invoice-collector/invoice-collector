
import { SketchCollector } from '../../sketchCollector';

export class MozCollector extends SketchCollector {

    static CONFIG = {
        id: "moz",
        name: "Moz",
        description: "i18n.collectors.moz.description",
        version: "0",
        website: "https://moz.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9348.jpg",
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
        entryUrl: "https://moz.com/login",
    }

    constructor() {
        super(MozCollector.CONFIG);
    }
}
