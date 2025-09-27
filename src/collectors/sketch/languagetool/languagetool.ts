
import { SketchCollector } from '../../sketchCollector';

export class LanguagetoolCollector extends SketchCollector {

    static CONFIG = {
        id: "languagetool",
        name: "LanguageTool",
        description: "i18n.collectors.languagetool.description",
        version: "0",
        website: "https://languagetool.org/de/user-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777993.jpg",
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
        entryUrl: "https://languagetool.org/de/user-login",
    }

    constructor() {
        super(LanguagetoolCollector.CONFIG);
    }
}
