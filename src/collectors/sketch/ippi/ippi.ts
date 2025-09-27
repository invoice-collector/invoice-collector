
import { SketchCollector } from '../../sketchCollector';

export class IppiCollector extends SketchCollector {

    static CONFIG = {
        id: "ippi",
        name: "Ippi",
        description: "i18n.collectors.ippi.description",
        version: "0",
        website: "https://www.ippi.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137041.jpg",
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
        entryUrl: "https://www.ippi.com/",
    }

    constructor() {
        super(IppiCollector.CONFIG);
    }
}
