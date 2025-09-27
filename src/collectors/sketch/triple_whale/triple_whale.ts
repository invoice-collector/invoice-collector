
import { SketchCollector } from '../../sketchCollector';

export class TripleWhaleCollector extends SketchCollector {

    static CONFIG = {
        id: "triple_whale",
        name: "Triple Whale",
        description: "i18n.collectors.triple_whale.description",
        version: "0",
        website: "https://app.triplewhale.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1621997.jpg",
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
        entryUrl: "https://app.triplewhale.com/",
    }

    constructor() {
        super(TripleWhaleCollector.CONFIG);
    }
}
