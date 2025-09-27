
import { SketchCollector } from '../../sketchCollector';

export class SuperMagneteCollector extends SketchCollector {

    static CONFIG = {
        id: "super_magnete",
        name: "Super Magnete",
        description: "i18n.collectors.super_magnete.description",
        version: "0",
        website: "https://www.supermagnete.fr/profile/orderlist",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777236.jpg",
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
        entryUrl: "https://www.supermagnete.fr/profile/orderlist",
    }

    constructor() {
        super(SuperMagneteCollector.CONFIG);
    }
}
