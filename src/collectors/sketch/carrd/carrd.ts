
import { SketchCollector } from '../../sketchCollector';

export class CarrdCollector extends SketchCollector {

    static CONFIG = {
        id: "carrd",
        name: "Carrd",
        description: "i18n.collectors.carrd.description",
        version: "0",
        website: "https://carrd.co/dashboard/account/balance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/522396.jpg",
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
        entryUrl: "https://carrd.co/dashboard/account/balance",
    }

    constructor() {
        super(CarrdCollector.CONFIG);
    }
}
