
import { SketchCollector } from '../../sketchCollector';

export class HostprofisCollector extends SketchCollector {

    static CONFIG = {
        id: "hostprofis",
        name: "HostProfis",
        description: "i18n.collectors.hostprofis.description",
        version: "0",
        website: "https://www.hostprofis.com/web/customer/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/445997.jpg",
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
        entryUrl: "https://www.hostprofis.com/web/customer/invoice",
    }

    constructor() {
        super(HostprofisCollector.CONFIG);
    }
}
