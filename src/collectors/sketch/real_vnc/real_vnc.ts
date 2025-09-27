
import { SketchCollector } from '../../sketchCollector';

export class RealVncCollector extends SketchCollector {

    static CONFIG = {
        id: "real_vnc",
        name: "Real VNC",
        description: "i18n.collectors.real_vnc.description",
        version: "0",
        website: "https://manage.realvnc.com/en/?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040949.jpg",
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
        entryUrl: "https://manage.realvnc.com/en/?",
    }

    constructor() {
        super(RealVncCollector.CONFIG);
    }
}
