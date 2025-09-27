
import { SketchCollector } from '../../sketchCollector';

export class PrectelCollector extends SketchCollector {

    static CONFIG = {
        id: "prectel",
        name: "Prectel",
        description: "i18n.collectors.prectel.description",
        version: "0",
        website: "https://mafacture.prectel.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4488038.jpg",
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
        entryUrl: "https://mafacture.prectel.com",
    }

    constructor() {
        super(PrectelCollector.CONFIG);
    }
}
