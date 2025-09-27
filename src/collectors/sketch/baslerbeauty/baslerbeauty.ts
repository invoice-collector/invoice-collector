
import { SketchCollector } from '../../sketchCollector';

export class BaslerbeautyCollector extends SketchCollector {

    static CONFIG = {
        id: "baslerbeauty",
        name: "BaslerBeauty",
        description: "i18n.collectors.baslerbeauty.description",
        version: "0",
        website: "https://www.basler-beauty.de/bestellhistorie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973266.jpg",
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
        entryUrl: "https://www.basler-beauty.de/bestellhistorie/",
    }

    constructor() {
        super(BaslerbeautyCollector.CONFIG);
    }
}
