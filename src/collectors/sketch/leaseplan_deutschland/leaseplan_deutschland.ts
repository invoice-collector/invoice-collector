
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeaseplanDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "leaseplan_deutschland",
        name: "leaseplan Deutschland",
        description: "i18n.collectors.leaseplan_deutschland.description",
        version: "0",
        website: "https://auth.leaseplan.com/login?state=hKFo2SBxNEdGSUpKaXdHRHNaeTB2dzRqQzBDXzJUWG96b05pS6FupWxvZ2luo3RpZNkgeDRCaV9MOV9tN0lNTzFDTGcwSXU3NlBUbENJYndVQ0KjY2lk2SBONVk2Zzd0VU9DN2NLcWFHYnRyVVRRRzFwVmhjTGRKMA&client=N5Y6g7tUOC7cKqaGbtrUTQG1pVhcLdJ0&protocol=saml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1082093.jpg",
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
        loginUrl: "https://auth.leaseplan.com/login?state=hKFo2SBxNEdGSUpKaXdHRHNaeTB2dzRqQzBDXzJUWG96b05pS6FupWxvZ2luo3RpZNkgeDRCaV9MOV9tN0lNTzFDTGcwSXU3NlBUbENJYndVQ0KjY2lk2SBONVk2Zzd0VU9DN2NLcWFHYnRyVVRRRzFwVmhjTGRKMA&client=N5Y6g7tUOC7cKqaGbtrUTQG1pVhcLdJ0&protocol=saml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeaseplanDeutschlandCollector.CONFIG);
    }
}
