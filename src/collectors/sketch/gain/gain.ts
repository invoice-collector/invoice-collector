
import { SketchCollector } from '../../sketchCollector';

export class GainCollector extends SketchCollector {

    static CONFIG = {
        id: "gain",
        name: "gain",
        description: "i18n.collectors.gain.description",
        version: "0",
        website: "https://manage.gainapp.com/14577/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297685.jpg",
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
        entryUrl: "https://manage.gainapp.com/14577/billing/",
    }

    constructor() {
        super(GainCollector.CONFIG);
    }
}
