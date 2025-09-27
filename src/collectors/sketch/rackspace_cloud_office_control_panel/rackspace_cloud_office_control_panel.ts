
import { SketchCollector } from '../../sketchCollector';

export class RackspaceCloudOfficeControlPanelCollector extends SketchCollector {

    static CONFIG = {
        id: "rackspace_cloud_office_control_panel",
        name: "Rackspace - Cloud Office Control Panel",
        description: "i18n.collectors.rackspace_cloud_office_control_panel.description",
        version: "0",
        website: "https://cp.rackspace.com/Default.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/304.jpg",
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
        entryUrl: "https://cp.rackspace.com/Default.aspx",
    }

    constructor() {
        super(RackspaceCloudOfficeControlPanelCollector.CONFIG);
    }
}
