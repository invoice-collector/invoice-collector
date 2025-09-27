
import { SketchCollector } from '../../sketchCollector';

export class DreamrobotCollector extends SketchCollector {

    static CONFIG = {
        id: "dreamrobot",
        name: "DreamRobot",
        description: "i18n.collectors.dreamrobot.description",
        version: "0",
        website: "https://www.dreamrobot.de/info/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3687.jpg",
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
        entryUrl: "https://www.dreamrobot.de/info/login/",
    }

    constructor() {
        super(DreamrobotCollector.CONFIG);
    }
}
