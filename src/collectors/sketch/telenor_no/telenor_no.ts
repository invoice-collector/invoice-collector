
import { SketchCollector } from '../../sketchCollector';

export class TelenorNoCollector extends SketchCollector {

    static CONFIG = {
        id: "telenor_no",
        name: "Telenor.no",
        description: "i18n.collectors.telenor_no.description",
        version: "0",
        website: "https://www.telenor.no/privat/mine-sider/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9575.jpg",
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
        entryUrl: "https://www.telenor.no/privat/mine-sider/",
    }

    constructor() {
        super(TelenorNoCollector.CONFIG);
    }
}
