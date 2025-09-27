
import { SketchCollector } from '../../sketchCollector';

export class PaperspaceCollector extends SketchCollector {

    static CONFIG = {
        id: "paperspace",
        name: "Paperspace",
        description: "i18n.collectors.paperspace.description",
        version: "0",
        website: "https://www.paperspace.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46464.jpg",
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
        entryUrl: "https://www.paperspace.com/account/login",
    }

    constructor() {
        super(PaperspaceCollector.CONFIG);
    }
}
