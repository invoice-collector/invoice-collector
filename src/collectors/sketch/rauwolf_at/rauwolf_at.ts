
import { SketchCollector } from '../../sketchCollector';

export class RauwolfAtCollector extends SketchCollector {

    static CONFIG = {
        id: "rauwolf_at",
        name: "Rauwolf AT",
        description: "i18n.collectors.rauwolf_at.description",
        version: "0",
        website: "https://rauwolf-coffee.at/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/541218.jpg",
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
        entryUrl: "https://rauwolf-coffee.at/account/orders",
    }

    constructor() {
        super(RauwolfAtCollector.CONFIG);
    }
}
