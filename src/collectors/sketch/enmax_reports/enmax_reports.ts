
import { SketchCollector } from '../../sketchCollector';

export class EnmaxReportsCollector extends SketchCollector {

    static CONFIG = {
        id: "enmax_reports",
        name: "ENMAX - Reports",
        description: "i18n.collectors.enmax_reports.description",
        version: "0",
        website: "https://www.enmax.com/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9204.jpg",
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
        entryUrl: "https://www.enmax.com/reports",
    }

    constructor() {
        super(EnmaxReportsCollector.CONFIG);
    }
}
