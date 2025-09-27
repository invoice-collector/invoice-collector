
import { SketchCollector } from '../../sketchCollector';

export class ThamesWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "thames_water",
        name: "Thames Water",
        description: "i18n.collectors.thames_water.description",
        version: "0",
        website: "https://myaccount.thameswater.co.uk/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8618.jpg",
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
        entryUrl: "https://myaccount.thameswater.co.uk/login",
    }

    constructor() {
        super(ThamesWaterCollector.CONFIG);
    }
}
