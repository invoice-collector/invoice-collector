
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RackspaceMyrackspacePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "rackspace_myrackspace_portal",
        name: "Rackspace - MyRackspace Portal",
        description: "i18n.collectors.rackspace_myrackspace_portal.description",
        version: "0",
        website: "https://www.rackspace.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7764.jpg",
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
        loginUrl: "https://www.rackspace.com/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RackspaceMyrackspacePortalCollector.CONFIG);
    }
}
