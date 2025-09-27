
import { SketchCollector } from '../../sketchCollector';

export class FoxyCollector extends SketchCollector {

    static CONFIG = {
        id: "foxy",
        name: "Foxy",
        description: "i18n.collectors.foxy.description",
        version: "0",
        website: "https://admin.foxycart.com/admin.php?ThisAction=ViewBilling",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64993.jpg",
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
        entryUrl: "https://admin.foxycart.com/admin.php?ThisAction=ViewBilling",
    }

    constructor() {
        super(FoxyCollector.CONFIG);
    }
}
