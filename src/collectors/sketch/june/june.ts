
import { SketchCollector } from '../../sketchCollector';

export class JuneCollector extends SketchCollector {

    static CONFIG = {
        id: "june",
        name: "June",
        description: "i18n.collectors.june.description",
        version: "0",
        website: "https://app.june.energy/contract/3143/documents/june",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347086.jpg",
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
        entryUrl: "https://app.june.energy/contract/3143/documents/june",
    }

    constructor() {
        super(JuneCollector.CONFIG);
    }
}
