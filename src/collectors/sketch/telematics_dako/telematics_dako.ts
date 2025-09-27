
import { SketchCollector } from '../../sketchCollector';

export class TelematicsDakoCollector extends SketchCollector {

    static CONFIG = {
        id: "telematics_dako",
        name: "Telematics DAKO",
        description: "i18n.collectors.telematics_dako.description",
        version: "0",
        website: "https://www.tachoweb.eu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192203.jpg",
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
        entryUrl: "https://www.tachoweb.eu",
    }

    constructor() {
        super(TelematicsDakoCollector.CONFIG);
    }
}
