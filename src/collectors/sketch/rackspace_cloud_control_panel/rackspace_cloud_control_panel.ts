
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RackspaceCloudControlPanelCollector extends SketchCollector {

    static CONFIG = {
        id: "rackspace_cloud_control_panel",
        name: "Rackspace - Cloud control panel",
        description: "i18n.collectors.rackspace_cloud_control_panel.description",
        version: "0",
        website: "https://login.rackspace.com/?next=%2Fsso%2Fv2%2Fauthdone&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=mtBCns5ZbsOmJmyBHyhjU7xPyplqvepJD%2F9XZ1dEeEXXUyKtkO2NOfWmuU1voBl78qN01CUSAEUjelneVdaLf%2B2dLe24FRutLvlSoGtyWgGmwJZy9WfdDcVe",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7763.jpg",
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
        loginUrl: "https://login.rackspace.com/?next=%2Fsso%2Fv2%2Fauthdone&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=mtBCns5ZbsOmJmyBHyhjU7xPyplqvepJD%2F9XZ1dEeEXXUyKtkO2NOfWmuU1voBl78qN01CUSAEUjelneVdaLf%2B2dLe24FRutLvlSoGtyWgGmwJZy9WfdDcVe",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RackspaceCloudControlPanelCollector.CONFIG);
    }
}
