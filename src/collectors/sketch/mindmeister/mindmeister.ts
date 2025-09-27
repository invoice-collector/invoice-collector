
import { SketchCollector } from '../../sketchCollector';

export class MindmeisterCollector extends SketchCollector {

    static CONFIG = {
        id: "mindmeister",
        name: "MindMeister",
        description: "i18n.collectors.mindmeister.description",
        version: "0",
        website: "https://www.mindmeister.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7361.jpg",
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
        entryUrl: "https://www.mindmeister.com/account/login",
    }

    constructor() {
        super(MindmeisterCollector.CONFIG);
    }
}
