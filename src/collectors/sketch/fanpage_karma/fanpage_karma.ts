
import { SketchCollector } from '../../sketchCollector';

export class FanpageKarmaCollector extends SketchCollector {

    static CONFIG = {
        id: "fanpage_karma",
        name: "fanpage karma",
        description: "i18n.collectors.fanpage_karma.description",
        version: "0",
        website: "https://www.fanpagekarma.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11055.jpg",
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
        entryUrl: "https://www.fanpagekarma.com/login",
    }

    constructor() {
        super(FanpageKarmaCollector.CONFIG);
    }
}
