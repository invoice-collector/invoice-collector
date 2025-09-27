
import { SketchCollector } from '../../sketchCollector';

export class HostingsolutionsItCollector extends SketchCollector {

    static CONFIG = {
        id: "hostingsolutions_it",
        name: "hostingsolutions.it",
        description: "i18n.collectors.hostingsolutions_it.description",
        version: "0",
        website: "https://pdc.hostingsolutions.it/MasterCP/MasterLogin.pl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8696.jpg",
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
        entryUrl: "https://pdc.hostingsolutions.it/MasterCP/MasterLogin.pl",
    }

    constructor() {
        super(HostingsolutionsItCollector.CONFIG);
    }
}
