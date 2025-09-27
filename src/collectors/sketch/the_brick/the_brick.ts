
import { SketchCollector } from '../../sketchCollector';

export class TheBrickCollector extends SketchCollector {

    static CONFIG = {
        id: "the_brick",
        name: "The Brick",
        description: "i18n.collectors.the_brick.description",
        version: "0",
        website: "https://www.thebrick.com/account/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8617.jpg",
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
        entryUrl: "https://www.thebrick.com/account/sign-in",
    }

    constructor() {
        super(TheBrickCollector.CONFIG);
    }
}
