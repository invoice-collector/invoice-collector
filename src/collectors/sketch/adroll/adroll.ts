
import { SketchCollector } from '../../sketchCollector';

export class AdrollCollector extends SketchCollector {

    static CONFIG = {
        id: "adroll",
        name: "Adroll",
        description: "i18n.collectors.adroll.description",
        version: "0",
        website: "https://app.adroll.com/account/signin?next=%2Fdashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4151.jpg",
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
        entryUrl: "https://app.adroll.com/account/signin?next=%2Fdashboard",
    }

    constructor() {
        super(AdrollCollector.CONFIG);
    }
}
