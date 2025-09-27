
import { SketchCollector } from '../../sketchCollector';

export class EverphoneCollector extends SketchCollector {

    static CONFIG = {
        id: "everphone",
        name: "everphone",
        description: "i18n.collectors.everphone.description",
        version: "0",
        website: "https://www.everphone.app/sicherheit/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69618.jpg",
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
        entryUrl: "https://www.everphone.app/sicherheit/anmelden",
    }

    constructor() {
        super(EverphoneCollector.CONFIG);
    }
}
