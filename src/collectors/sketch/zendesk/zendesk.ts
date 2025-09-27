
import { SketchCollector } from '../../sketchCollector';

export class ZendeskCollector extends SketchCollector {

    static CONFIG = {
        id: "zendesk",
        name: "zendesk",
        description: "i18n.collectors.zendesk.description",
        version: "0",
        website: "https://www.zendesk.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/448.jpg",
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
        entryUrl: "https://www.zendesk.com/login/",
    }

    constructor() {
        super(ZendeskCollector.CONFIG);
    }
}
