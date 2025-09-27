
import { SketchCollector } from '../../sketchCollector';

export class JobooGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "joboo_gmbh",
        name: "Joboo gmbh",
        description: "i18n.collectors.joboo_gmbh.description",
        version: "0",
        website: "https://www.joboo.de/de/einloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3126582.jpg",
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
        entryUrl: "https://www.joboo.de/de/einloggen",
    }

    constructor() {
        super(JobooGmbhCollector.CONFIG);
    }
}
