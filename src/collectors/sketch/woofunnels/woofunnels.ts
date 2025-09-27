
import { SketchCollector } from '../../sketchCollector';

export class WoofunnelsCollector extends SketchCollector {

    static CONFIG = {
        id: "woofunnels",
        name: "WooFunnels",
        description: "i18n.collectors.woofunnels.description",
        version: "0",
        website: "https://account.buildwoofunnels.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153628.jpg",
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
        entryUrl: "https://account.buildwoofunnels.com",
    }

    constructor() {
        super(WoofunnelsCollector.CONFIG);
    }
}
