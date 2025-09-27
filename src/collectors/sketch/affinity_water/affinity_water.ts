
import { SketchCollector } from '../../sketchCollector';

export class AffinityWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "affinity_water",
        name: "Affinity Water",
        description: "i18n.collectors.affinity_water.description",
        version: "0",
        website: "https://myonlineaccount.affinitywater.co.uk/Account/Login?ReturnUrl=%2F&ReturnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16066.jpg",
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
        entryUrl: "https://myonlineaccount.affinitywater.co.uk/Account/Login?ReturnUrl=%2F&ReturnUrl=%2F",
    }

    constructor() {
        super(AffinityWaterCollector.CONFIG);
    }
}
