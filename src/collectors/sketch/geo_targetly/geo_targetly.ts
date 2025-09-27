
import { SketchCollector } from '../../sketchCollector';

export class GeoTargetlyCollector extends SketchCollector {

    static CONFIG = {
        id: "geo_targetly",
        name: "Geo Targetly",
        description: "i18n.collectors.geo_targetly.description",
        version: "0",
        website: "https://dashboard.geotargetly.com/credits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2785575.jpg",
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
        entryUrl: "https://dashboard.geotargetly.com/credits",
    }

    constructor() {
        super(GeoTargetlyCollector.CONFIG);
    }
}
