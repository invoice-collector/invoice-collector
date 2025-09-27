
import { SketchCollector } from '../../sketchCollector';

export class ManitobaHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "manitoba_hydro",
        name: "Manitoba Hydro",
        description: "i18n.collectors.manitoba_hydro.description",
        version: "0",
        website: "https://www.hydro.mb.ca/mybillapp/loginf5?action=acctsummary&lang=en_CA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9355.jpg",
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
        entryUrl: "https://www.hydro.mb.ca/mybillapp/loginf5?action=acctsummary&lang=en_CA",
    }

    constructor() {
        super(ManitobaHydroCollector.CONFIG);
    }
}
