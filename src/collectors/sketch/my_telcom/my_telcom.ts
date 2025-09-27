
import { SketchCollector } from '../../sketchCollector';

export class MyTelcomCollector extends SketchCollector {

    static CONFIG = {
        id: "my_telcom",
        name: "My.Telcom",
        description: "i18n.collectors.my_telcom.description",
        version: "0",
        website: "https://my.telcom.uk/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405788.jpg",
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
        entryUrl: "https://my.telcom.uk/billing",
    }

    constructor() {
        super(MyTelcomCollector.CONFIG);
    }
}
