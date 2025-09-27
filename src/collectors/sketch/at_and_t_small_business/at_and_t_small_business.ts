
import { SketchCollector } from '../../sketchCollector';

export class AtAndTSmallBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "at_and_t_small_business",
        name: "AT&T Small Business",
        description: "i18n.collectors.at_and_t_small_business.description",
        version: "0",
        website: "https://smb.att.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8539.jpg",
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
        entryUrl: "https://smb.att.com/",
    }

    constructor() {
        super(AtAndTSmallBusinessCollector.CONFIG);
    }
}
