
import { SketchCollector } from '../../sketchCollector';

export class UneuroCollector extends SketchCollector {

    static CONFIG = {
        id: "uneuro",
        name: "UnEuro",
        description: "i18n.collectors.uneuro.description",
        version: "0",
        website: "https://en.unoeuro.com/controlpanel/login/?return=%2Fcontrolpanel%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9566.jpg",
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
        entryUrl: "https://en.unoeuro.com/controlpanel/login/?return=%2Fcontrolpanel%2F",
    }

    constructor() {
        super(UneuroCollector.CONFIG);
    }
}
