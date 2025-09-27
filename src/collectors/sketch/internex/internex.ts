
import { SketchCollector } from '../../sketchCollector';

export class InternexCollector extends SketchCollector {

    static CONFIG = {
        id: "internex",
        name: "Internex",
        description: "i18n.collectors.internex.description",
        version: "0",
        website: "https://www.internex.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65110.jpg",
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
        entryUrl: "https://www.internex.at",
    }

    constructor() {
        super(InternexCollector.CONFIG);
    }
}
