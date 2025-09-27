
import { SketchCollector } from '../../sketchCollector';

export class WorkplaceByFacebookCollector extends SketchCollector {

    static CONFIG = {
        id: "workplace_by_facebook",
        name: "Workplace by facebook",
        description: "i18n.collectors.workplace_by_facebook.description",
        version: "0",
        website: "https://www.workplace.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/544909.jpg",
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
        entryUrl: "https://www.workplace.com/",
    }

    constructor() {
        super(WorkplaceByFacebookCollector.CONFIG);
    }
}
