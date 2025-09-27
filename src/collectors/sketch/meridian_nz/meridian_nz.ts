
import { SketchCollector } from '../../sketchCollector';

export class MeridianNzCollector extends SketchCollector {

    static CONFIG = {
        id: "meridian_nz",
        name: "Meridian.nz",
        description: "i18n.collectors.meridian_nz.description",
        version: "0",
        website: "http://www.meridianenergy.co.nz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8935.jpg",
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
        entryUrl: "http://www.meridianenergy.co.nz",
    }

    constructor() {
        super(MeridianNzCollector.CONFIG);
    }
}
