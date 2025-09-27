
import { SketchCollector } from '../../sketchCollector';

export class FreeeupCollector extends SketchCollector {

    static CONFIG = {
        id: "freeeup",
        name: "FreeeUp",
        description: "i18n.collectors.freeeup.description",
        version: "0",
        website: "https://timeclock.freeeup.com/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70045.jpg",
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
        entryUrl: "https://timeclock.freeeup.com/payments",
    }

    constructor() {
        super(FreeeupCollector.CONFIG);
    }
}
