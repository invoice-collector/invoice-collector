
import { SketchCollector } from '../../sketchCollector';

export class MyKruellVersichertDeCollector extends SketchCollector {

    static CONFIG = {
        id: "my_kruell_versichert_de",
        name: "my-kruell-versichert.de",
        description: "i18n.collectors.my_kruell_versichert_de.description",
        version: "0",
        website: "https://my-kruell-versichert.de/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126176.jpg",
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
        entryUrl: "https://my-kruell-versichert.de/documents",
    }

    constructor() {
        super(MyKruellVersichertDeCollector.CONFIG);
    }
}
