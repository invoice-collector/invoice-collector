
import { SketchCollector } from '../../sketchCollector';

export class VidnozComCollector extends SketchCollector {

    static CONFIG = {
        id: "vidnoz_com",
        name: "Vidnoz.com",
        description: "i18n.collectors.vidnoz_com.description",
        version: "0",
        website: "https://aiapp-de.vidnoz.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727694.jpg",
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
        entryUrl: "https://aiapp-de.vidnoz.com",
    }

    constructor() {
        super(VidnozComCollector.CONFIG);
    }
}
