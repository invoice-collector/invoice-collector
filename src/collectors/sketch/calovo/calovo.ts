
import { SketchCollector } from '../../sketchCollector';

export class CalovoCollector extends SketchCollector {

    static CONFIG = {
        id: "calovo",
        name: "calovo",
        description: "i18n.collectors.calovo.description",
        version: "0",
        website: "https://calpit.calovo.com/user/account?anchor=addon-tab-tab",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297683.jpg",
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
        entryUrl: "https://calpit.calovo.com/user/account?anchor=addon-tab-tab",
    }

    constructor() {
        super(CalovoCollector.CONFIG);
    }
}
