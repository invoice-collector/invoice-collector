
import { SketchCollector } from '../../sketchCollector';

export class FreshdeskCollector extends SketchCollector {

    static CONFIG = {
        id: "freshdesk",
        name: "freshdesk",
        description: "i18n.collectors.freshdesk.description",
        version: "0",
        website: "https://accounts.freshworks.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/446.jpg",
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
        entryUrl: "https://accounts.freshworks.com/login",
    }

    constructor() {
        super(FreshdeskCollector.CONFIG);
    }
}
