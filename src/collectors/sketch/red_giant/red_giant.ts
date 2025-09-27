
import { SketchCollector } from '../../sketchCollector';

export class RedGiantCollector extends SketchCollector {

    static CONFIG = {
        id: "red_giant",
        name: "Red Giant",
        description: "i18n.collectors.red_giant.description",
        version: "0",
        website: "https://www.redgiant.com/store/customer/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14896.jpg",
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
        entryUrl: "https://www.redgiant.com/store/customer/orders",
    }

    constructor() {
        super(RedGiantCollector.CONFIG);
    }
}
