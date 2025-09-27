
import { SketchCollector } from '../../sketchCollector';

export class MailtrapIoCollector extends SketchCollector {

    static CONFIG = {
        id: "mailtrap_io",
        name: "mailtrap.io",
        description: "i18n.collectors.mailtrap_io.description",
        version: "0",
        website: "https://mailtrap.io/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19992.jpg",
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
        entryUrl: "https://mailtrap.io/signin",
    }

    constructor() {
        super(MailtrapIoCollector.CONFIG);
    }
}
