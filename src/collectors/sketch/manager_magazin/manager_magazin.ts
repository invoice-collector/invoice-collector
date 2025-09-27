
import { SketchCollector } from '../../sketchCollector';

export class ManagerMagazinCollector extends SketchCollector {

    static CONFIG = {
        id: "manager_magazin",
        name: "Manager Magazin",
        description: "i18n.collectors.manager_magazin.description",
        version: "0",
        website: "https://www.manager-magazin.de/premium/access/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121135.jpg",
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
        entryUrl: "https://www.manager-magazin.de/premium/access/account",
    }

    constructor() {
        super(ManagerMagazinCollector.CONFIG);
    }
}
