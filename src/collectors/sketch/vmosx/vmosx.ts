
import { SketchCollector } from '../../sketchCollector';

export class VmosxCollector extends SketchCollector {

    static CONFIG = {
        id: "vmosx",
        name: "vmOSX",
        description: "i18n.collectors.vmosx.description",
        version: "0",
        website: "http://www.virtualmacosx.com/billing/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/903.jpg",
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
        entryUrl: "http://www.virtualmacosx.com/billing/clientarea.php",
    }

    constructor() {
        super(VmosxCollector.CONFIG);
    }
}
