
import { SketchCollector } from '../../sketchCollector';

export class InvoxiaCollector extends SketchCollector {

    static CONFIG = {
        id: "invoxia",
        name: "invoxia",
        description: "i18n.collectors.invoxia.description",
        version: "0",
        website: "https://hub.invoxia.com/login?next=devices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/946418.jpg",
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
        entryUrl: "https://hub.invoxia.com/login?next=devices",
    }

    constructor() {
        super(InvoxiaCollector.CONFIG);
    }
}
