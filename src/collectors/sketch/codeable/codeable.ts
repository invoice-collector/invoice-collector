
import { SketchCollector } from '../../sketchCollector';

export class CodeableCollector extends SketchCollector {

    static CONFIG = {
        id: "codeable",
        name: "Codeable",
        description: "i18n.collectors.codeable.description",
        version: "0",
        website: "https://app.codeable.io/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65130.jpg",
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
        entryUrl: "https://app.codeable.io/sign_in",
    }

    constructor() {
        super(CodeableCollector.CONFIG);
    }
}
