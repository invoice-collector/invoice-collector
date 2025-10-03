
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VrPlusPortalWareCollector extends SketchCollector {

    static CONFIG = {
        id: "vr_plus_portal_ware",
        name: "VR Plus Portal Ware",
        description: "i18n.collectors.vr_plus_portal_ware.description",
        version: "0",
        website: "https://kundenportal.vrplus-ware.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4665690.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://kundenportal.vrplus-ware.de/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VrPlusPortalWareCollector.CONFIG);
    }
}
