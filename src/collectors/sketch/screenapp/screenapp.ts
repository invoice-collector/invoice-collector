
import { SketchCollector } from '../../sketchCollector';

export class ScreenappCollector extends SketchCollector {

    static CONFIG = {
        id: "screenapp",
        name: "ScreenApp",
        description: "i18n.collectors.screenapp.description",
        version: "0",
        website: "https://screenapp.io/app/#/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4589603.jpg",
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
        entryUrl: "https://screenapp.io/app/#/signin",
    }

    constructor() {
        super(ScreenappCollector.CONFIG);
    }
}
