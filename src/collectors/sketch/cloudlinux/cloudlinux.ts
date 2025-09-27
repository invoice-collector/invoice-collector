
import { SketchCollector } from '../../sketchCollector';

export class CloudlinuxCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudlinux",
        name: "CloudLinux",
        description: "i18n.collectors.cloudlinux.description",
        version: "0",
        website: "https://cln.cloudlinux.com/clweb/account/reseller/billing.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3838.jpg",
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
        entryUrl: "https://cln.cloudlinux.com/clweb/account/reseller/billing.xhtml",
    }

    constructor() {
        super(CloudlinuxCollector.CONFIG);
    }
}
