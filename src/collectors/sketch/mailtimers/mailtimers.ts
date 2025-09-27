
import { SketchCollector } from '../../sketchCollector';

export class MailtimersCollector extends SketchCollector {

    static CONFIG = {
        id: "mailtimers",
        name: "Mailtimers",
        description: "i18n.collectors.mailtimers.description",
        version: "0",
        website: "https://mailtimers.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153623.jpg",
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
        entryUrl: "https://mailtimers.com/user/login",
    }

    constructor() {
        super(MailtimersCollector.CONFIG);
    }
}
