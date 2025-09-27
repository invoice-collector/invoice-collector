
import { SketchCollector } from '../../sketchCollector';

export class SkypeCollector extends SketchCollector {

    static CONFIG = {
        id: "skype",
        name: "Skype",
        description: "i18n.collectors.skype.description",
        version: "0",
        website: "https://secure.skype.com/portal/overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/416.jpg",
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
        entryUrl: "https://secure.skype.com/portal/overview",
    }

    constructor() {
        super(SkypeCollector.CONFIG);
    }
}
