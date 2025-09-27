
import { SketchCollector } from '../../sketchCollector';

export class HogastAtCollector extends SketchCollector {

    static CONFIG = {
        id: "hogast_at",
        name: "Hogast.at",
        description: "i18n.collectors.hogast_at.description",
        version: "0",
        website: "https://my.hogast.at/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1865504.jpg",
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
        entryUrl: "https://my.hogast.at/#/login",
    }

    constructor() {
        super(HogastAtCollector.CONFIG);
    }
}
