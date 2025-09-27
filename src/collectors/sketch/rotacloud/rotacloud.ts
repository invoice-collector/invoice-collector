
import { SketchCollector } from '../../sketchCollector';

export class RotacloudCollector extends SketchCollector {

    static CONFIG = {
        id: "rotacloud",
        name: "RotaCloud",
        description: "i18n.collectors.rotacloud.description",
        version: "0",
        website: "https://app.rotacloud.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69034.jpg",
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
        entryUrl: "https://app.rotacloud.com",
    }

    constructor() {
        super(RotacloudCollector.CONFIG);
    }
}
