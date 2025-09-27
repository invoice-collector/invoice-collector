
import { SketchCollector } from '../../sketchCollector';

export class LinodeCollector extends SketchCollector {

    static CONFIG = {
        id: "linode",
        name: "Linode",
        description: "i18n.collectors.linode.description",
        version: "0",
        website: "https://cloud.linode.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9370.jpg",
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
        entryUrl: "https://cloud.linode.com/account/billing",
    }

    constructor() {
        super(LinodeCollector.CONFIG);
    }
}
