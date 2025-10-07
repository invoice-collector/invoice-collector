
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhpFriendsCollector extends SketchCollector {

    static CONFIG = {
        id: "php_friends",
        name: "PHP-Friends",
        description: "i18n.collectors.php_friends.description",
        version: "0",
        website: "https://crm.php-friends.de/invoice/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37594.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://crm.php-friends.de/invoice/index",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhpFriendsCollector.CONFIG);
    }
}
