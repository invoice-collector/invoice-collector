
import { SketchCollector } from '../../sketchCollector';

export class BloomAndWildCollector extends SketchCollector {

    static CONFIG = {
        id: "bloom_and_wild",
        name: "BLOOM&WILD",
        description: "i18n.collectors.bloom_and_wild.description",
        version: "0",
        website: "https://www.bloomandwild.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/788541.jpg",
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
        entryUrl: "https://www.bloomandwild.de/",
    }

    constructor() {
        super(BloomAndWildCollector.CONFIG);
    }
}
