
import { SketchCollector } from '../../sketchCollector';

export class TribehrCollector extends SketchCollector {

    static CONFIG = {
        id: "tribehr",
        name: "TribeHR",
        description: "i18n.collectors.tribehr.description",
        version: "0",
        website: "https://www.mytribehr.com/users/login/find",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8601.jpg",
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
        entryUrl: "https://www.mytribehr.com/users/login/find",
    }

    constructor() {
        super(TribehrCollector.CONFIG);
    }
}
