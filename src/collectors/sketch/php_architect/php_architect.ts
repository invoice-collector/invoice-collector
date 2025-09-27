
import { SketchCollector } from '../../sketchCollector';

export class PhpArchitectCollector extends SketchCollector {

    static CONFIG = {
        id: "php_architect",
        name: "PHP Architect",
        description: "i18n.collectors.php_architect.description",
        version: "0",
        website: "https://www.phparch.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2063533.jpg",
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
        entryUrl: "https://www.phparch.com/account",
    }

    constructor() {
        super(PhpArchitectCollector.CONFIG);
    }
}
