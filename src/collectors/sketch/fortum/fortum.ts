
import { SketchCollector } from '../../sketchCollector';

export class FortumCollector extends SketchCollector {

    static CONFIG = {
        id: "fortum",
        name: "Fortum",
        description: "i18n.collectors.fortum.description",
        version: "0",
        website: "https://www.mittfortum.se/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/143858.jpg",
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
        entryUrl: "https://www.mittfortum.se/",
    }

    constructor() {
        super(FortumCollector.CONFIG);
    }
}
