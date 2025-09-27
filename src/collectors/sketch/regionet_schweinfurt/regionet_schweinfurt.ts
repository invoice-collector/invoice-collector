
import { SketchCollector } from '../../sketchCollector';

export class RegionetSchweinfurtCollector extends SketchCollector {

    static CONFIG = {
        id: "regionet_schweinfurt",
        name: "RegioNet Schweinfurt",
        description: "i18n.collectors.regionet_schweinfurt.description",
        version: "0",
        website: "http://www.regionet-sw.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9464.jpg",
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
        entryUrl: "http://www.regionet-sw.de",
    }

    constructor() {
        super(RegionetSchweinfurtCollector.CONFIG);
    }
}
