
import { SketchCollector } from '../../sketchCollector';

export class ContentdripsCollector extends SketchCollector {

    static CONFIG = {
        id: "contentdrips",
        name: "Contentdrips",
        description: "i18n.collectors.contentdrips.description",
        version: "0",
        website: "https://contentdrips.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1445444.jpg",
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
        entryUrl: "https://contentdrips.com/login",
    }

    constructor() {
        super(ContentdripsCollector.CONFIG);
    }
}
