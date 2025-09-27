
import { SketchCollector } from '../../sketchCollector';

export class KreaCollector extends SketchCollector {

    static CONFIG = {
        id: "krea",
        name: "Krea",
        description: "i18n.collectors.krea.description",
        version: "0",
        website: "https://www.krea.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571745.jpg",
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
        entryUrl: "https://www.krea.ai/login",
    }

    constructor() {
        super(KreaCollector.CONFIG);
    }
}
