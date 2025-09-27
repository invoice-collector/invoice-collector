
import { SketchCollector } from '../../sketchCollector';

export class MoninCollector extends SketchCollector {

    static CONFIG = {
        id: "monin",
        name: "Monin",
        description: "i18n.collectors.monin.description",
        version: "0",
        website: "https://www.moninside.com/BMS/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132308.jpg",
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
        entryUrl: "https://www.moninside.com/BMS/",
    }

    constructor() {
        super(MoninCollector.CONFIG);
    }
}
