
import { SketchCollector } from '../../sketchCollector';

export class ManychatCollector extends SketchCollector {

    static CONFIG = {
        id: "manychat",
        name: "ManyChat",
        description: "i18n.collectors.manychat.description",
        version: "0",
        website: "https://manychat.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19919.jpg",
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
        entryUrl: "https://manychat.com/login",
    }

    constructor() {
        super(ManychatCollector.CONFIG);
    }
}
