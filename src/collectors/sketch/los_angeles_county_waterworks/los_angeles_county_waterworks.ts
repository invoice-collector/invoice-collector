
import { SketchCollector } from '../../sketchCollector';

export class LosAngelesCountyWaterworksCollector extends SketchCollector {

    static CONFIG = {
        id: "los_angeles_county_waterworks",
        name: "Los Angeles County Waterworks",
        description: "i18n.collectors.los_angeles_county_waterworks.description",
        version: "0",
        website: "https://dpw.lacounty.gov/mywam/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176471.jpg",
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
        entryUrl: "https://dpw.lacounty.gov/mywam/",
    }

    constructor() {
        super(LosAngelesCountyWaterworksCollector.CONFIG);
    }
}
