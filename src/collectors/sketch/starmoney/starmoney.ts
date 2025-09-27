
import { SketchCollector } from '../../sketchCollector';

export class StarmoneyCollector extends SketchCollector {

    static CONFIG = {
        id: "starmoney",
        name: "StarMoney",
        description: "i18n.collectors.starmoney.description",
        version: "0",
        website: "https://www.starmoney.de/kundenbereich/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1109.jpg",
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
        entryUrl: "https://www.starmoney.de/kundenbereich/login",
    }

    constructor() {
        super(StarmoneyCollector.CONFIG);
    }
}
