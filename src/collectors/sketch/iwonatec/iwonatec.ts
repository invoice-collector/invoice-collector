
import { SketchCollector } from '../../sketchCollector';

export class IwonatecCollector extends SketchCollector {

    static CONFIG = {
        id: "iwonatec",
        name: "IWONATEC",
        description: "i18n.collectors.iwonatec.description",
        version: "0",
        website: "https://www.iwonatec.com/de/kundenkonto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1314715.jpg",
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
        entryUrl: "https://www.iwonatec.com/de/kundenkonto",
    }

    constructor() {
        super(IwonatecCollector.CONFIG);
    }
}
