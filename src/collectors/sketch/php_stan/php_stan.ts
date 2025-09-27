
import { SketchCollector } from '../../sketchCollector';

export class PhpStanCollector extends SketchCollector {

    static CONFIG = {
        id: "php_stan",
        name: "php-stan",
        description: "i18n.collectors.php_stan.description",
        version: "0",
        website: "https://account.phpstan.com/login#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2525490.jpg",
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
        entryUrl: "https://account.phpstan.com/login#",
    }

    constructor() {
        super(PhpStanCollector.CONFIG);
    }
}
