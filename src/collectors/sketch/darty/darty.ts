
import { SketchCollector } from '../../sketchCollector';

export class DartyCollector extends SketchCollector {

    static CONFIG = {
        id: "darty",
        name: "Darty",
        description: "i18n.collectors.darty.description",
        version: "0",
        website: "https://www.darty.com/espace_client/connexion?storeId=10001&espaceclient=0&org=head",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27354.jpg",
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
        entryUrl: "https://www.darty.com/espace_client/connexion?storeId=10001&espaceclient=0&org=head",
    }

    constructor() {
        super(DartyCollector.CONFIG);
    }
}
