
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RackspaceFanaticalSupportForAwsControlPanelCollector extends SketchCollector {

    static CONFIG = {
        id: "rackspace_fanatical_support_for_aws_control_panel",
        name: "Rackspace - Fanatical support for aws control panel",
        description: "i18n.collectors.rackspace_fanatical_support_for_aws_control_panel.description",
        version: "0",
        website: "https://www.rackspace.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7761.jpg",
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
        super(RackspaceFanaticalSupportForAwsControlPanelCollector.CONFIG);
    }
}
