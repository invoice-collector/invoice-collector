
import { SketchCollector } from '../../sketchCollector';

export class UsepacCollector extends SketchCollector {

    static CONFIG = {
        id: "usepac",
        name: "UsePac",
        description: "i18n.collectors.usepac.description",
        version: "0",
        website: "https://www.usepac.de/login.html?action=history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77690.jpg",
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
        entryUrl: "https://www.usepac.de/login.html?action=history",
    }

    constructor() {
        super(UsepacCollector.CONFIG);
    }
}
