
import { SketchCollector } from '../../sketchCollector';

export class SonetelCollector extends SketchCollector {

    static CONFIG = {
        id: "sonetel",
        name: "Sonetel",
        description: "i18n.collectors.sonetel.description",
        version: "0",
        website: "https://portal.sonetel.com/portal/UI/pages/SignIn/SignIn.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8803.jpg",
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
        entryUrl: "https://portal.sonetel.com/portal/UI/pages/SignIn/SignIn.aspx",
    }

    constructor() {
        super(SonetelCollector.CONFIG);
    }
}
