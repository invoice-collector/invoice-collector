
import { SketchCollector } from '../../sketchCollector';

export class InterfaxCollector extends SketchCollector {

    static CONFIG = {
        id: "interfax",
        name: "InterFAX",
        description: "i18n.collectors.interfax.description",
        version: "0",
        website: "https://secure.interfax.net/Default.aspx?MenuItem=AccountManagement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69466.jpg",
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
        entryUrl: "https://secure.interfax.net/Default.aspx?MenuItem=AccountManagement",
    }

    constructor() {
        super(InterfaxCollector.CONFIG);
    }
}
