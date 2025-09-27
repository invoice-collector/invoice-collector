
import { SketchCollector } from '../../sketchCollector';

export class ProworkflowCollector extends SketchCollector {

    static CONFIG = {
        id: "proworkflow",
        name: "ProWorkflow",
        description: "i18n.collectors.proworkflow.description",
        version: "0",
        website: "https://www.proworkflow.com/clients/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8277.jpg",
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
        entryUrl: "https://www.proworkflow.com/clients/",
    }

    constructor() {
        super(ProworkflowCollector.CONFIG);
    }
}
