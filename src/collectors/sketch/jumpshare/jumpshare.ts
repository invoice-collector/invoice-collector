
import { SketchCollector } from '../../sketchCollector';

export class JumpshareCollector extends SketchCollector {

    static CONFIG = {
        id: "jumpshare",
        name: "Jumpshare",
        description: "i18n.collectors.jumpshare.description",
        version: "0",
        website: "https://jumpshare.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040961.jpg",
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
        entryUrl: "https://jumpshare.com",
    }

    constructor() {
        super(JumpshareCollector.CONFIG);
    }
}
