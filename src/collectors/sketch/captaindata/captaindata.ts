
import { SketchCollector } from '../../sketchCollector';

export class CaptaindataCollector extends SketchCollector {

    static CONFIG = {
        id: "captaindata",
        name: "captaindata",
        description: "i18n.collectors.captaindata.description",
        version: "0",
        website: "https://app.captaindata.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132306.jpg",
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
        entryUrl: "https://app.captaindata.co/login",
    }

    constructor() {
        super(CaptaindataCollector.CONFIG);
    }
}
