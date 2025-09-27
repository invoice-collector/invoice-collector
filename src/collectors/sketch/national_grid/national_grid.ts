
import { SketchCollector } from '../../sketchCollector';

export class NationalGridCollector extends SketchCollector {

    static CONFIG = {
        id: "national_grid",
        name: "National Grid",
        description: "i18n.collectors.national_grid.description",
        version: "0",
        website: "https://www1.nationalgridus.com/SignIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9041.jpg",
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
        entryUrl: "https://www1.nationalgridus.com/SignIn",
    }

    constructor() {
        super(NationalGridCollector.CONFIG);
    }
}
