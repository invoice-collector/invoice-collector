
import { SketchCollector } from '../../sketchCollector';

export class CulliganWaterNewJerseyCollector extends SketchCollector {

    static CONFIG = {
        id: "culligan_water_new_jersey",
        name: "Culligan Water New Jersey",
        description: "i18n.collectors.culligan_water_new_jersey.description",
        version: "0",
        website: "https://www.culligannj.com/services/online-bill-pay",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798828.jpg",
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
        entryUrl: "https://www.culligannj.com/services/online-bill-pay",
    }

    constructor() {
        super(CulliganWaterNewJerseyCollector.CONFIG);
    }
}
