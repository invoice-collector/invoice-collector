
import { SketchCollector } from '../../sketchCollector';

export class HitaskCollector extends SketchCollector {

    static CONFIG = {
        id: "hitask",
        name: "HITASK",
        description: "i18n.collectors.hitask.description",
        version: "0",
        website: "https://app.hitask.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/930637.jpg",
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
        entryUrl: "https://app.hitask.com/login",
    }

    constructor() {
        super(HitaskCollector.CONFIG);
    }
}
