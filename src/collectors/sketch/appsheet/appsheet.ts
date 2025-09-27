
import { SketchCollector } from '../../sketchCollector';

export class AppsheetCollector extends SketchCollector {

    static CONFIG = {
        id: "appsheet",
        name: "AppSheet",
        description: "i18n.collectors.appsheet.description",
        version: "0",
        website: "https://www.appsheet.com/Account/Account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50421.jpg",
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
        entryUrl: "https://www.appsheet.com/Account/Account",
    }

    constructor() {
        super(AppsheetCollector.CONFIG);
    }
}
