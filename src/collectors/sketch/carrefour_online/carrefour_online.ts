
import { SketchCollector } from '../../sketchCollector';

export class CarrefourOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "carrefour_online",
        name: "Carrefour - Online",
        description: "i18n.collectors.carrefour_online.description",
        version: "0",
        website: "https://www.rueducommerce.fr/client/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27493.jpg",
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
        entryUrl: "https://www.rueducommerce.fr/client/login",
    }

    constructor() {
        super(CarrefourOnlineCollector.CONFIG);
    }
}
