
import { SketchCollector } from '../../sketchCollector';

export class FirstDebitInkassoCollector extends SketchCollector {

    static CONFIG = {
        id: "first_debit_inkasso",
        name: "First Debit Inkasso",
        description: "i18n.collectors.first_debit_inkasso.description",
        version: "0",
        website: "https://portal.firstdebit.de/wl/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173510.jpg",
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
        entryUrl: "https://portal.firstdebit.de/wl/login.php",
    }

    constructor() {
        super(FirstDebitInkassoCollector.CONFIG);
    }
}
