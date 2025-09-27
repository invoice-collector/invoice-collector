
import { SketchCollector } from '../../sketchCollector';

export class MyschleppappCollector extends SketchCollector {

    static CONFIG = {
        id: "myschleppapp",
        name: "MySchleppApp",
        description: "i18n.collectors.myschleppapp.description",
        version: "0",
        website: "https://portal.myschleppapp.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761414.jpg",
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
        entryUrl: "https://portal.myschleppapp.de",
    }

    constructor() {
        super(MyschleppappCollector.CONFIG);
    }
}
