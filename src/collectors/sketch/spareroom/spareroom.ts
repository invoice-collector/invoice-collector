
import { SketchCollector } from '../../sketchCollector';

export class SpareroomCollector extends SketchCollector {

    static CONFIG = {
        id: "spareroom",
        name: "SpareRoom",
        description: "i18n.collectors.spareroom.description",
        version: "0",
        website: "http://www.spareroom.co.uk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21903.jpg",
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
        entryUrl: "http://www.spareroom.co.uk",
    }

    constructor() {
        super(SpareroomCollector.CONFIG);
    }
}
