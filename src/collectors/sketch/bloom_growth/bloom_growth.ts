
import { SketchCollector } from '../../sketchCollector';

export class BloomGrowthCollector extends SketchCollector {

    static CONFIG = {
        id: "bloom_growth",
        name: "Bloom Growth",
        description: "i18n.collectors.bloom_growth.description",
        version: "0",
        website: "https://app.bloomgrowth.com/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4546920.jpg",
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
        entryUrl: "https://app.bloomgrowth.com/invoice",
    }

    constructor() {
        super(BloomGrowthCollector.CONFIG);
    }
}
