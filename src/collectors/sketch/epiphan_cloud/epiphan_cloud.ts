
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EpiphanCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "epiphan_cloud",
        name: "Epiphan Cloud",
        description: "i18n.collectors.epiphan_cloud.description",
        version: "0",
        website: "https://go.epiphan.cloud/xxxxxxxx/settings/billing-usage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120027.jpg",
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
        loginUrl: "https://go.epiphan.cloud/xxxxxxxx/settings/billing-usage",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EpiphanCloudCollector.CONFIG);
    }
}
