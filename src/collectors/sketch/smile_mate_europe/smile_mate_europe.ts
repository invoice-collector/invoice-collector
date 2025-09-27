
import { SketchCollector } from '../../sketchCollector';

export class SmileMateEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "smile_mate_europe",
        name: "Smile Mate Europe",
        description: "i18n.collectors.smile_mate_europe.description",
        version: "0",
        website: "https://eu.smilemate.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445880.jpg",
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
        entryUrl: "https://eu.smilemate.com/login",
    }

    constructor() {
        super(SmileMateEuropeCollector.CONFIG);
    }
}
