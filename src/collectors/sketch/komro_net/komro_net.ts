
import { SketchCollector } from '../../sketchCollector';

export class KomroNetCollector extends SketchCollector {

    static CONFIG = {
        id: "komro_net",
        name: "komro.net",
        description: "i18n.collectors.komro_net.description",
        version: "0",
        website: "https://www.komro.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9423.jpg",
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
        entryUrl: "https://www.komro.net/login",
    }

    constructor() {
        super(KomroNetCollector.CONFIG);
    }
}
