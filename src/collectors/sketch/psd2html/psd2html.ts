
import { SketchCollector } from '../../sketchCollector';

export class Psd2htmlCollector extends SketchCollector {

    static CONFIG = {
        id: "psd2html",
        name: "PSD2HTML",
        description: "i18n.collectors.psd2html.description",
        version: "0",
        website: "https://www.psd2html.com/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24467.jpg",
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
        entryUrl: "https://www.psd2html.com/login.html",
    }

    constructor() {
        super(Psd2htmlCollector.CONFIG);
    }
}
