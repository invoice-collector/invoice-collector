
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LwcDrinksCollector extends SketchCollector {

    static CONFIG = {
        id: "lwc_drinks",
        name: "LWC Drinks",
        description: "i18n.collectors.lwc_drinks.description",
        version: "0",
        website: "https://www.lwc-drinks.co.uk/lwc-online/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69045.jpg",
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
        entryUrl: "https://www.lwc-drinks.co.uk/lwc-online/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LwcDrinksCollector.CONFIG);
    }
}
