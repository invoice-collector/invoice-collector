
import { SketchCollector } from '../../sketchCollector';

export class IntellivapCollector extends SketchCollector {

    static CONFIG = {
        id: "intellivap",
        name: "IntelliVap",
        description: "i18n.collectors.intellivap.description",
        version: "0",
        website: "https://intellivap.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120475.jpg",
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
        entryUrl: "https://intellivap.com/",
    }

    constructor() {
        super(IntellivapCollector.CONFIG);
    }
}
