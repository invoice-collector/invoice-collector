
import { SketchCollector } from '../../sketchCollector';

export class AladomCollector extends SketchCollector {

    static CONFIG = {
        id: "aladom",
        name: "Aladom",
        description: "i18n.collectors.aladom.description",
        version: "0",
        website: "https://www.aladom.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035350.jpg",
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
        entryUrl: "https://www.aladom.fr",
    }

    constructor() {
        super(AladomCollector.CONFIG);
    }
}
