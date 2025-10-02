
import { SketchCollector } from '../../sketchCollector';

export class RemoteItCollector extends SketchCollector {

    static CONFIG = {
        id: "remote_it",
        name: "Remote (.it)",
        description: "i18n.collectors.remote_it.description",
        version: "0",
        website: "https://app.remote.it/#/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1487176.jpg",
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
        entryUrl: "https://app.remote.it/#/account/billing",
    }

    constructor() {
        super(RemoteItCollector.CONFIG);
    }
}
