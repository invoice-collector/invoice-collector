
import { SketchCollector } from '../../sketchCollector';

export class OnlineafsprakenCollector extends SketchCollector {

    static CONFIG = {
        id: "onlineafspraken",
        name: "Onlineafspraken",
        description: "i18n.collectors.onlineafspraken.description",
        version: "0",
        website: "https://agenda.onlineafspraken.nl/companies/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020647.jpg",
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
        entryUrl: "https://agenda.onlineafspraken.nl/companies/invoice",
    }

    constructor() {
        super(OnlineafsprakenCollector.CONFIG);
    }
}
