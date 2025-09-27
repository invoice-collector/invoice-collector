
import { SketchCollector } from '../../sketchCollector';

export class IspSystemCollector extends SketchCollector {

    static CONFIG = {
        id: "isp_system",
        name: "ISP System",
        description: "i18n.collectors.isp_system.description",
        version: "0",
        website: "https://my.ispsystem.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19378.jpg",
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
        entryUrl: "https://my.ispsystem.com",
    }

    constructor() {
        super(IspSystemCollector.CONFIG);
    }
}
