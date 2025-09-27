
import { SketchCollector } from '../../sketchCollector';

export class PassmarkSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "passmark_software",
        name: "PassMark Software",
        description: "i18n.collectors.passmark_software.description",
        version: "0",
        website: "https://www.passmark.com/profile.php?history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3014707.jpg",
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
        entryUrl: "https://www.passmark.com/profile.php?history",
    }

    constructor() {
        super(PassmarkSoftwareCollector.CONFIG);
    }
}
