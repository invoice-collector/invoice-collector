
import { SketchCollector } from '../../sketchCollector';

export class MsMileIqCollector extends SketchCollector {

    static CONFIG = {
        id: "ms_mile_iq",
        name: "MS Mile IQ",
        description: "i18n.collectors.ms_mile_iq.description",
        version: "0",
        website: "https://dashboard.mileiq.com/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211822.jpg",
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
        entryUrl: "https://dashboard.mileiq.com/reports",
    }

    constructor() {
        super(MsMileIqCollector.CONFIG);
    }
}
