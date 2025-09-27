
import { SketchCollector } from '../../sketchCollector';

export class FirstChoiceTechCollector extends SketchCollector {

    static CONFIG = {
        id: "first_choice_tech",
        name: "First Choice Tech",
        description: "i18n.collectors.first_choice_tech.description",
        version: "0",
        website: "https://www.precisebillonline.com/FirstChoice/V35/Portals/Customer/Profile.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88515.jpg",
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
        entryUrl: "https://www.precisebillonline.com/FirstChoice/V35/Portals/Customer/Profile.aspx",
    }

    constructor() {
        super(FirstChoiceTechCollector.CONFIG);
    }
}
