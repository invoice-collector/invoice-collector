
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ViewegerSoftwareSuperadminCollector extends SketchCollector {

    static CONFIG = {
        id: "vieweger_software_superadmin",
        name: "Vieweger Software Superadmin",
        description: "i18n.collectors.vieweger_software_superadmin.description",
        version: "0",
        website: "https://www.superbike8.de/haendlerportal/admin/invoices/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1374738.jpg",
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
        loginUrl: "https://www.superbike8.de/haendlerportal/admin/invoices/index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ViewegerSoftwareSuperadminCollector.CONFIG);
    }
}
