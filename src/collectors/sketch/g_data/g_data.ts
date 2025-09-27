
import { SketchCollector } from '../../sketchCollector';

export class GDataCollector extends SketchCollector {

    static CONFIG = {
        id: "g_data",
        name: "G DATA",
        description: "i18n.collectors.g_data.description",
        version: "0",
        website: "https://www.gdata.de/mygdata",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34091.jpg",
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
        entryUrl: "https://www.gdata.de/mygdata",
    }

    constructor() {
        super(GDataCollector.CONFIG);
    }
}
