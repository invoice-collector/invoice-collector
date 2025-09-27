
import { SketchCollector } from '../../sketchCollector';

export class MooCollector extends SketchCollector {

    static CONFIG = {
        id: "moo",
        name: "MOO",
        description: "i18n.collectors.moo.description",
        version: "0",
        website: "https://www.moo.com/us/account/signin.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6066.jpg",
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
        entryUrl: "https://www.moo.com/us/account/signin.php",
    }

    constructor() {
        super(MooCollector.CONFIG);
    }
}
