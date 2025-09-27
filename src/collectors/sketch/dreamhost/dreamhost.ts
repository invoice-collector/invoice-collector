
import { SketchCollector } from '../../sketchCollector';

export class DreamhostCollector extends SketchCollector {

    static CONFIG = {
        id: "dreamhost",
        name: "Dreamhost",
        description: "i18n.collectors.dreamhost.description",
        version: "0",
        website: "https://panel.dreamhost.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8580.jpg",
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
        entryUrl: "https://panel.dreamhost.com",
    }

    constructor() {
        super(DreamhostCollector.CONFIG);
    }
}
