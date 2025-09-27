
import { SketchCollector } from '../../sketchCollector';

export class ThreeIeCollector extends SketchCollector {

    static CONFIG = {
        id: "three_ie",
        name: "Three.ie",
        description: "i18n.collectors.three_ie.description",
        version: "0",
        website: "https://login.three.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/216585.jpg",
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
        entryUrl: "https://login.three.ie/",
    }

    constructor() {
        super(ThreeIeCollector.CONFIG);
    }
}
