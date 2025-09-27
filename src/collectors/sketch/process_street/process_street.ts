
import { SketchCollector } from '../../sketchCollector';

export class ProcessStreetCollector extends SketchCollector {

    static CONFIG = {
        id: "process_street",
        name: "Process Street",
        description: "i18n.collectors.process_street.description",
        version: "0",
        website: "https://app.process.st/organizations/manage/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21720.jpg",
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
        entryUrl: "https://app.process.st/organizations/manage/billing",
    }

    constructor() {
        super(ProcessStreetCollector.CONFIG);
    }
}
