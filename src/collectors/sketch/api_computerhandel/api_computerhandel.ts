
import { SketchCollector } from '../../sketchCollector';

export class ApiComputerhandelCollector extends SketchCollector {

    static CONFIG = {
        id: "api_computerhandel",
        name: "api computerhandel",
        description: "i18n.collectors.api_computerhandel.description",
        version: "0",
        website: "https://shop.api.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88378.jpg",
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
        entryUrl: "https://shop.api.de",
    }

    constructor() {
        super(ApiComputerhandelCollector.CONFIG);
    }
}
