
import { SketchCollector } from '../../sketchCollector';

export class NamesiloCollector extends SketchCollector {

    static CONFIG = {
        id: "namesilo",
        name: "NameSilo",
        description: "i18n.collectors.namesilo.description",
        version: "0",
        website: "https://www.namesilo.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28527.jpg",
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
        entryUrl: "https://www.namesilo.com/login.php",
    }

    constructor() {
        super(NamesiloCollector.CONFIG);
    }
}
