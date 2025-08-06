import { SketchCollector } from '../../sketchCollector';

export class BuroPlusCollector extends SketchCollector {

    static CONFIG = {
        id: "buroplus",
        name: "Buroplus",
        description: "i18n.collectors.buroplus.description",
        version: "0",
        website: "https://buroplus.com",
        logo: "https://www.buroplus.com/INTERSHOP/static/WFS/ADVEO-BuroPlus-Site/-/-/fr_FR/themes/buroplus/img/logo.jpg",
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
        }
    }

    constructor() {
        super(BuroPlusCollector.CONFIG);
    }
}
