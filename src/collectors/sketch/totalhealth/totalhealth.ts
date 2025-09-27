
import { SketchCollector } from '../../sketchCollector';

export class TotalhealthCollector extends SketchCollector {

    static CONFIG = {
        id: "totalhealth",
        name: "TotalHealth",
        description: "i18n.collectors.totalhealth.description",
        version: "0",
        website: "https://totalhealth.ie/member",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/408102.jpg",
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
        entryUrl: "https://totalhealth.ie/member",
    }

    constructor() {
        super(TotalhealthCollector.CONFIG);
    }
}
