
import { SketchCollector } from '../../sketchCollector';

export class AttijarinetCollector extends SketchCollector {

    static CONFIG = {
        id: "attijarinet",
        name: "Attijarinet",
        description: "i18n.collectors.attijarinet.description",
        version: "0",
        website: "https://attijarinet.attijariwafa.com/particulier/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778912.jpg",
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
        entryUrl: "https://attijarinet.attijariwafa.com/particulier/",
    }

    constructor() {
        super(AttijarinetCollector.CONFIG);
    }
}
