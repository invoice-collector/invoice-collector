
import { SketchCollector } from '../../sketchCollector';

export class RUOnCollector extends SketchCollector {

    static CONFIG = {
        id: "r_u_on",
        name: "R-U-ON",
        description: "i18n.collectors.r_u_on.description",
        version: "0",
        website: "https://www.r-u-on.com/ctrl?action=assets",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/711959.jpg",
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
        entryUrl: "https://www.r-u-on.com/ctrl?action=assets",
    }

    constructor() {
        super(RUOnCollector.CONFIG);
    }
}
