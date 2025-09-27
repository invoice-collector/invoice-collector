
import { SketchCollector } from '../../sketchCollector';

export class SorglosInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "sorglos_internet",
        name: "Sorglos Internet",
        description: "i18n.collectors.sorglos_internet.description",
        version: "0",
        website: "https://mein.sorglosinternet.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64908.jpg",
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
        entryUrl: "https://mein.sorglosinternet.de/login",
    }

    constructor() {
        super(SorglosInternetCollector.CONFIG);
    }
}
