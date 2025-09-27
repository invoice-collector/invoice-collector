
import { SketchCollector } from '../../sketchCollector';

export class ScreencastOMaticCollector extends SketchCollector {

    static CONFIG = {
        id: "screencast_o_matic",
        name: "Screencast o Matic",
        description: "i18n.collectors.screencast_o_matic.description",
        version: "0",
        website: "https://screencast-o-matic.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15967.jpg",
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
        entryUrl: "https://screencast-o-matic.com/account",
    }

    constructor() {
        super(ScreencastOMaticCollector.CONFIG);
    }
}
