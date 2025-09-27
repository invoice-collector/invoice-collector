
import { SketchCollector } from '../../sketchCollector';

export class ChangetowerCollector extends SketchCollector {

    static CONFIG = {
        id: "changetower",
        name: "ChangeTower",
        description: "i18n.collectors.changetower.description",
        version: "0",
        website: "https://app.changetower.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732354.jpg",
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
        entryUrl: "https://app.changetower.com/billing",
    }

    constructor() {
        super(ChangetowerCollector.CONFIG);
    }
}
