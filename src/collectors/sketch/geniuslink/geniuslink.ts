
import { SketchCollector } from '../../sketchCollector';

export class GeniuslinkCollector extends SketchCollector {

    static CONFIG = {
        id: "geniuslink",
        name: "geniuslink",
        description: "i18n.collectors.geniuslink.description",
        version: "0",
        website: "https://my.geni.us/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88371.jpg",
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
        entryUrl: "https://my.geni.us/account/billing",
    }

    constructor() {
        super(GeniuslinkCollector.CONFIG);
    }
}
