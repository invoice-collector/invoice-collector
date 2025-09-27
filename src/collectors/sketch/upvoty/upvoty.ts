
import { SketchCollector } from '../../sketchCollector';

export class UpvotyCollector extends SketchCollector {

    static CONFIG = {
        id: "upvoty",
        name: "upvoty",
        description: "i18n.collectors.upvoty.description",
        version: "0",
        website: "https://crm.upvoty.com/members/auth/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811730.jpg",
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
        entryUrl: "https://crm.upvoty.com/members/auth/",
    }

    constructor() {
        super(UpvotyCollector.CONFIG);
    }
}
