
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VillatechDiscounteoCollector extends SketchCollector {

    static CONFIG = {
        id: "villatech_discounteo",
        name: "Villatech - Discounteo",
        description: "i18n.collectors.villatech_discounteo.description",
        version: "0",
        website: "https://www.villatech.fr/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124022.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.villatech.fr/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VillatechDiscounteoCollector.CONFIG);
    }
}
