
import { SketchCollector } from '../../sketchCollector';

export class BirminghamWaterWorksCollector extends SketchCollector {

    static CONFIG = {
        id: "birmingham_water_works",
        name: "Birmingham Water Works",
        description: "i18n.collectors.birmingham_water_works.description",
        version: "0",
        website: "https://web.bwwb.org/myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037297.jpg",
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
        entryUrl: "https://web.bwwb.org/myaccount",
    }

    constructor() {
        super(BirminghamWaterWorksCollector.CONFIG);
    }
}
