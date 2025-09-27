
import { SketchCollector } from '../../sketchCollector';

export class WinesittingCollector extends SketchCollector {

    static CONFIG = {
        id: "winesitting",
        name: "WINESITTING",
        description: "i18n.collectors.winesitting.description",
        version: "0",
        website: "https://winesitting.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/875958.jpg",
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
        entryUrl: "https://winesitting.com/login",
    }

    constructor() {
        super(WinesittingCollector.CONFIG);
    }
}
