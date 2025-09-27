
import { SketchCollector } from '../../sketchCollector';

export class DocsendCollector extends SketchCollector {

    static CONFIG = {
        id: "docsend",
        name: "DocSend",
        description: "i18n.collectors.docsend.description",
        version: "0",
        website: "https://docsend.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36162.jpg",
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
        entryUrl: "https://docsend.com/login",
    }

    constructor() {
        super(DocsendCollector.CONFIG);
    }
}
