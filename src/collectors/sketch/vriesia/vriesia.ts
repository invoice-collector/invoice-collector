
import { SketchCollector } from '../../sketchCollector';

export class VriesiaCollector extends SketchCollector {

    static CONFIG = {
        id: "vriesia",
        name: "vriesia",
        description: "i18n.collectors.vriesia.description",
        version: "0",
        website: "http://www.vriesia.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32303.jpg",
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
        entryUrl: "http://www.vriesia.nl",
    }

    constructor() {
        super(VriesiaCollector.CONFIG);
    }
}
