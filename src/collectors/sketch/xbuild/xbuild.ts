
import { SketchCollector } from '../../sketchCollector';

export class XbuildCollector extends SketchCollector {

    static CONFIG = {
        id: "xbuild",
        name: "XBuild",
        description: "i18n.collectors.xbuild.description",
        version: "0",
        website: "https://web.myxbuild.com/slProject.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1808183.jpg",
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
        entryUrl: "https://web.myxbuild.com/slProject.php",
    }

    constructor() {
        super(XbuildCollector.CONFIG);
    }
}
