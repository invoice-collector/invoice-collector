
import { SketchCollector } from '../../sketchCollector';

export class ContentSnareCollector extends SketchCollector {

    static CONFIG = {
        id: "content_snare",
        name: "Content Snare",
        description: "i18n.collectors.content_snare.description",
        version: "0",
        website: "https://contentsnare.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060658.jpg",
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
        entryUrl: "https://contentsnare.com/",
    }

    constructor() {
        super(ContentSnareCollector.CONFIG);
    }
}
