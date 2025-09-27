
import { SketchCollector } from '../../sketchCollector';

export class MilanoteCollector extends SketchCollector {

    static CONFIG = {
        id: "milanote",
        name: "milanote",
        description: "i18n.collectors.milanote.description",
        version: "0",
        website: "https://app.milanote.com/account/plan/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226585.jpg",
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
        entryUrl: "https://app.milanote.com/account/plan/invoices",
    }

    constructor() {
        super(MilanoteCollector.CONFIG);
    }
}
