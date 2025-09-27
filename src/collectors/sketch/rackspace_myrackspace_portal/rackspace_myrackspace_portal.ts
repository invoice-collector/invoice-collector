
import { SketchCollector } from '../../sketchCollector';

export class RackspaceMyrackspacePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "rackspace_myrackspace_portal",
        name: "Rackspace - MyRackspace Portal",
        description: "i18n.collectors.rackspace_myrackspace_portal.description",
        version: "0",
        website: "https://www.rackspace.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7764.jpg",
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
        entryUrl: "https://www.rackspace.com/login",
    }

    constructor() {
        super(RackspaceMyrackspacePortalCollector.CONFIG);
    }
}
