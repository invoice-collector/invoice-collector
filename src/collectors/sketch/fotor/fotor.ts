
import { SketchCollector } from '../../sketchCollector';

export class FotorCollector extends SketchCollector {

    static CONFIG = {
        id: "fotor",
        name: "Fotor",
        description: "i18n.collectors.fotor.description",
        version: "0",
        website: "https://www.fotor.com/de/user/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2848425.jpg",
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
        entryUrl: "https://www.fotor.com/de/user/settings",
    }

    constructor() {
        super(FotorCollector.CONFIG);
    }
}
