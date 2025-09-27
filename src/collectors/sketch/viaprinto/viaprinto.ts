
import { SketchCollector } from '../../sketchCollector';

export class ViaprintoCollector extends SketchCollector {

    static CONFIG = {
        id: "viaprinto",
        name: "viaprinto",
        description: "i18n.collectors.viaprinto.description",
        version: "0",
        website: "https://www.viaprinto.de/-/myorders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8196.jpg",
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
        entryUrl: "https://www.viaprinto.de/-/myorders",
    }

    constructor() {
        super(ViaprintoCollector.CONFIG);
    }
}
