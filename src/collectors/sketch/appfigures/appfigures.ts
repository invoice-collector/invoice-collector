
import { SketchCollector } from '../../sketchCollector';

export class AppfiguresCollector extends SketchCollector {

    static CONFIG = {
        id: "appfigures",
        name: "appfigures",
        description: "i18n.collectors.appfigures.description",
        version: "0",
        website: "https://appfigures.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15810.jpg",
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
        entryUrl: "https://appfigures.com/login",
    }

    constructor() {
        super(AppfiguresCollector.CONFIG);
    }
}
