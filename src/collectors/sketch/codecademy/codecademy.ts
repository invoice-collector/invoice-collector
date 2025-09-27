
import { SketchCollector } from '../../sketchCollector';

export class CodecademyCollector extends SketchCollector {

    static CONFIG = {
        id: "codecademy",
        name: "Codecademy",
        description: "i18n.collectors.codecademy.description",
        version: "0",
        website: "https://www.codecademy.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153914.jpg",
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
        entryUrl: "https://www.codecademy.com/account/billing",
    }

    constructor() {
        super(CodecademyCollector.CONFIG);
    }
}
