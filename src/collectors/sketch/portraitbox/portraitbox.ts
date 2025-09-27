
import { SketchCollector } from '../../sketchCollector';

export class PortraitboxCollector extends SketchCollector {

    static CONFIG = {
        id: "portraitbox",
        name: "portraitbox",
        description: "i18n.collectors.portraitbox.description",
        version: "0",
        website: "https://admin.portraitbox.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70003.jpg",
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
        entryUrl: "https://admin.portraitbox.com/",
    }

    constructor() {
        super(PortraitboxCollector.CONFIG);
    }
}
