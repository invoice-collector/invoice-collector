
import { SketchCollector } from '../../sketchCollector';

export class MailfenceCollector extends SketchCollector {

    static CONFIG = {
        id: "mailfence",
        name: "Mailfence",
        description: "i18n.collectors.mailfence.description",
        version: "0",
        website: "https://mailfence.com/flatx/index.jsp#tool=prefs&page=receipt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1333279.jpg",
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
        entryUrl: "https://mailfence.com/flatx/index.jsp#tool=prefs&page=receipt",
    }

    constructor() {
        super(MailfenceCollector.CONFIG);
    }
}
