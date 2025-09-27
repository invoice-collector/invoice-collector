
import { SketchCollector } from '../../sketchCollector';

export class PlacidCollector extends SketchCollector {

    static CONFIG = {
        id: "placid",
        name: "placid",
        description: "i18n.collectors.placid.description",
        version: "0",
        website: "https://placid.app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2525388.jpg",
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
        entryUrl: "https://placid.app/login",
    }

    constructor() {
        super(PlacidCollector.CONFIG);
    }
}
