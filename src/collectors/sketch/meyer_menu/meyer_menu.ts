
import { SketchCollector } from '../../sketchCollector';

export class MeyerMenuCollector extends SketchCollector {

    static CONFIG = {
        id: "meyer_menu",
        name: "Meyer Menu",
        description: "i18n.collectors.meyer_menu.description",
        version: "0",
        website: "https://shop.meyer-menue.de/#/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4368024.jpg",
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
        entryUrl: "https://shop.meyer-menue.de/#/login/",
    }

    constructor() {
        super(MeyerMenuCollector.CONFIG);
    }
}
