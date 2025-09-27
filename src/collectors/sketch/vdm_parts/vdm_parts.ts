
import { SketchCollector } from '../../sketchCollector';

export class VdmPartsCollector extends SketchCollector {

    static CONFIG = {
        id: "vdm_parts",
        name: "VDM Parts",
        description: "i18n.collectors.vdm_parts.description",
        version: "0",
        website: "https://portal.vdmparts.com/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1745278.jpg",
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
        entryUrl: "https://portal.vdmparts.com/de/login",
    }

    constructor() {
        super(VdmPartsCollector.CONFIG);
    }
}
